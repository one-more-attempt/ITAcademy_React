import { useContext, useState } from "react";
import { StatusContext } from "./ItemList";

export const ItemCardReadMode = ({ name, price,setSelectRule,
    selectRule,DBState,
    setDBState, onCancel }) => {
  const state = useContext(StatusContext);
  const [buttonStatus, setButtonStatus] = state;

  return (
    <>
      <div className="item-fullcard">
        <span>MoreInfo about this item:</span>
        <p> Name:{name}</p>

        <p>Price:{price}</p>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </>
  );
};
