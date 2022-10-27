import { useState, useReducer } from "react";
import { HistoryReducer, INITIAL_STATE } from "../reducer";
import { useDispatch, useSelector } from "react-redux";

const HistoryTranslate = () => {
  const currState = useSelector((state) => state);
  return (
    <>
      <h2>Your history translate</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Languages</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
          </tr>
        </thead>
        <tbody>
          {currState.data?.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.langPairs}</td>
                <td>{item.initialText}</td>
                <td>{item.outputText}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default HistoryTranslate;
