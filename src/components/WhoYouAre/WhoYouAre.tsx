import React, { useState } from "react";
import axios from "axios";

function WhoYouAre() {
  const genderURL: string = "https://api.genderize.io/?name=";
  const ageURL: string = "https://api.agify.io/?name=";
  const nationalityURL: string = "https://api.nationalize.io/?name=";
  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const [outputAge, setOutputAge] = useState("");
  const [outputGender, setOutputGender] = useState("");
  const [outputNationality, setOutputNationality] = useState("");

  const onChangeValue = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setInputValue(event.currentTarget.value);
    setNameValue(event.currentTarget.value);
  };

  const onClickHandler = () => {
    let outputText: string = "";
    axios
      .all([
        axios.get(`${genderURL + nameValue}`).then((genderResp) => genderResp),
        axios.get(`${ageURL + nameValue}`).then((ageResp) => ageResp),
        axios
          .get(`${nationalityURL + nameValue}`)
          .then((nationalityResp) => nationalityResp),
      ])
      .then(
        axios.spread((genderResp, ageResp, nationalityResp) => {
          const tmpNationality = `
          With probability of ${Math.round(
            nationalityResp.data.country[0].probability * 100
          )}%
          you are from ${nationalityResp.data.country[0].country_id}`;
          setOutputAge(`Your age is: ${ageResp.data.age}`);
          setOutputGender(`Your gender is: ${genderResp.data.gender}`);
          setOutputNationality(tmpNationality);
        })
      )
      .catch((error) => alert(error));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChangeValue} />
      <button onClick={onClickHandler}>Get info!</button>
      <div>
        <div>{outputAge}</div>
        <div>{outputGender}</div>
        <div>{outputNationality}</div>
      </div>
    </div>
  );
}

export default WhoYouAre;
