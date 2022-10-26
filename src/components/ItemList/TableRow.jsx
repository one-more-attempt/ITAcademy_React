import "./table-row.css";
import { useState, useReducer } from "react";
import { useContext } from "react";
import { StatusContext } from "./ItemList";
import { ItemCard } from "./ItemCard";
import { INITIAL_STATE, countReducer } from "../reducer/reducer";
import addToOrder from "../ItemList/ItemList";
export function TableRow({
  setGlobalModalStatus,
  globalModalStatus,
  name,
  price,
  category,
  quantity,
  imgURL,
  active,
  id,
  DBState,
  setDBState,
  setEditMode,
  editMode,
  selectRule,
  setSelectRule,
  addMode,
  setAddMode,
}) {
  //получаем глобальный стейт всех кнопок
  const state = useContext(StatusContext);
  const [buttonStatus, setButtonStatus] = state;

  const changeArray = () => {
    const newStateArr = DBState.map((item) => {
      if (id === item.id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setDBState(newStateArr);
    console.log(DBState);
  };

  const changeEditMode = () => {
    setEditMode(true);
    changeArray();
  };

  const selectedItemClass = active
    ? "item-name-wrapper selected"
    : "item-name-wrapper";

  const setSelectedItem = () => {
    if (selectRule) {
      setEditMode(false);
      setAddMode(false);
      changeArray();
    }
  };

  const [itemStatus, setItemStatus] = useState(true);
  const changeItemStatus = () => {
    const confirmValue = window.confirm(`You are sure?`);
    if (confirmValue) {
      setItemStatus((previousState) => !previousState);
    }
  };

  //удален или не удален
  if (itemStatus) {
    return (
      <>
        {active ? (
          <ItemCard
            editMode={editMode}
            setEditMode={setEditMode}
            active={active}
            name={name}
            price={price}
            DBState={DBState}
            setDBState={setDBState}
            id={id}
            selectRule={selectRule}
            setSelectRule={setSelectRule}
            addMode={addMode}
            setAddMode={setAddMode}
          />
        ) : null}

        {/* Table Row */}
        <div className="row-wrapper">
          <div className={selectedItemClass} onClick={setSelectedItem}>
            <span className="item-category">{category}</span>
            {":"}
            <span className="item-name ">{name}</span>
          </div>
          <div className="item-price"> {price} $</div>
          <div className="number-of-items">{quantity} pc</div>
          <div className="item-pic">
            <img src={imgURL} alt="" />
          </div>
          <button disabled={buttonStatus} onClick={changeItemStatus}>
            DEL
          </button>
          <button disabled={buttonStatus} onClick={changeEditMode}>
            CNG
          </button>
        </div>
      </>
    );
  }
}
