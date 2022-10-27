import { useState, useReducer } from "react";
import axios from "axios";
import { HistoryReducer, INITIAL_STATE } from "../reducer";
import { useDispatch, useSelector } from "react-redux";

const TextTranslate = () => {
  const [fromLang, setFromLang] = useState("");
  const [toLang, setToLang] = useState("");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const currState = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(currState);

  const createNewTranslation = (data) => {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: data,
    });
  };

  const getTranslation = () => {
    console.log(fromLang, toLang, textToTranslate);
    const url = `https://api.mymemory.translated.net/get?q=${textToTranslate}&langpair=${fromLang}|${toLang}`;
    axios
      .get(url)
      .then((res) => {
        const output = res.data.responseData.translatedText;
        console.log(res.data.responseData);
        setOutputValue(output);
        return output;
      })
      .then((output) => {
        const newLangPair = `${fromLang}-${toLang}`;
        const newItemToHistory = {
          langPairs: newLangPair,
          initialText: textToTranslate,
          outputText: output,
        };
        console.log(newItemToHistory);
        createNewTranslation(newItemToHistory);
      });
  };

  return (
    <>
      <h1>React Translate App</h1>
      <div className="mb-3">
        <select
          onChange={(e) => {
            setFromLang(e.target.value);
            console.log(e.target.value);
          }}
          className="form-select"
          aria-label="Default select example"
        >
          <option selected>Select Language</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
          <option value="de">Deutch</option>
        </select>
      </div>

      <div className="mb-3">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Enter text to translate{" "}
          </label>
          <textarea
            value={textToTranslate}
            onChange={(e) => {
              setTextToTranslate(e.target.value);
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>

      <button
        onClick={getTranslation}
        type="button"
        class="btn btn-primary mb-4"
      >
        Translate
      </button>

      <div className="mb-3">
        <select
          onChange={(e) => {
            setToLang(e.target.value);
            console.log(e.target.value);
          }}
          className="form-select"
          aria-label="Default select example"
        >
          <option selected>Select Language</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
          <option value="de">Deutch</option>
        </select>
      </div>
      <div className="mb-3">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Total result Text
          </label>
          <textarea
            value={outputValue}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default TextTranslate;
