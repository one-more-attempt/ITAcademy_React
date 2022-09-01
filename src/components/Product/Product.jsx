import "./table-row.css";
import { useState } from "react";

export function TableRow(props) {
  const [selectedItem, setSelectedItem] = useState(false);
  const selectedItemClass = selectedItem
    ? "item-name-wrapper selected"
    : "item-name-wrapper";

  const changeSelectedItem = () => {
    setSelectedItem((previousState) => !previousState);
  };

  const [itemStatus, setItemStatus] = useState(true);
  const changeItemStatus = () => {
    const confirmValue = window.confirm(`You are sure?`);
    if (confirmValue) {
      setItemStatus((previousState) => !previousState);
    }
  };

  if (itemStatus) {
    return (
      <div className="row-wrapper">
        <div className={selectedItemClass} onClick={changeSelectedItem}>
          <span className="item-category">{props.category}: </span>
          <span className="">{props.name}</span>
        </div>
        <div className="item-price">{props.price} $</div>
        <div className="number-of-items">{props.quantity} pc</div>
        <div className="item-pic">
          <img src={props.imgURL} alt="" />
          {props.picURL}
        </div>
        <button onClick={changeItemStatus}>DEL</button>
      </div>
    );
  }
}
