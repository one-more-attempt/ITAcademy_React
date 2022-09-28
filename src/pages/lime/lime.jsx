import { useState } from "react";
export const Lime = () => {
  const [calValue, setCalValue] = useState("");
  const [outValue, setOutValue] = useState("");

  const changeValue = (e) => {
    setCalValue(e.target.value);
    setOutValue(e.target.value * 0.3);
  };

  return (
    <>
      <div className="gallery">
        <h1>LIME PAGE!</h1>
        Enter ccal's to calculate:
        <br />
        <input type="number" value={calValue} onChange={changeValue} />
        <div>{outValue}</div>
      </div>
    </>
  );
};
