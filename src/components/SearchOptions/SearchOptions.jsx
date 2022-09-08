import { useState } from "react";

export function SearchOptions(props) {
  const [searchValue, setSearchValue] = useState("");
  const [checkedStatus, setCheckedStatus] = useState(false);
  const [boxStatus, setBoxStatus] = useState(true);

  const changeSearchValue = (event) => {
    setSearchValue(event.target.value);
    props.searchHandler(event.target.value);
  };

  const changeCheckedStatus = () => {
    //рисуем галочку
    setCheckedStatus(!checkedStatus);
    //указываем активный стейт
    setBoxStatus(!boxStatus);
    console.log(checkedStatus, boxStatus);
    if (boxStatus) {
      props.alphaSorthandler();
    } else {
      props.defaultSortHandler();
    }
  };

  const resetAllParams = () => {
    setCheckedStatus(false);
    props.searchHandler("");
    setSearchValue("");
  };

  return (
    <div className="options">
      <input type="text" value={searchValue} onChange={changeSearchValue} />

      <input
        type="checkbox"
        checked={checkedStatus}
        onChange={changeCheckedStatus}
      />

      <button onClick={resetAllParams}>RESET ALL</button>
    </div>
  );
}

