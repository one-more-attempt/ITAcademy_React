import { useContext, useState } from "react";
import { StatusContext } from "./ItemList";

export const ItemCardEditMode = ({
  tmpNameValue,
  tmpPriceValue,
  changeNameValue,
  changePriceValue,
  onSave,
  setSelectRule,
  selectRule,
  DBState,
  setDBState,
  onCancel,
  saveButtonStatus,
  errorMessageStatus,
}) => {
  const state = useContext(StatusContext);
  const [buttonStatus, setButtonStatus] = state;

  return (
    <>
      <div className="item-fullcard">
        <span>MoreInfo about this item:</span>
        <p>
          Name:{" "}
          <input type="text" value={tmpNameValue} onChange={changeNameValue} />
        </p>

        <p>
          Price:{" "}
          <input
            type="number"
            value={tmpPriceValue}
            onChange={changePriceValue}
          />
        </p>
        <p style={{ color: "skyblue", display: errorMessageStatus }}>
          Fill all fields
        </p>
        <button disabled={saveButtonStatus} onClick={onSave}>
          Save
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </>
  );
};
