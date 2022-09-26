import { ItemCardAddMode } from "./ItemCardAddMode";
import { useContext, useState } from "react";
import { StatusContext } from "./ItemList";

// import
export function NewElement({
  DBState,
  setDBState,
  setEditMode,
  editMode,
  selectRule,
  setSelectRule,
  addMode,
  setAddMode,
  IdCounter,
  setIdCounter,
}) {
  const state = useContext(StatusContext);
  const [buttonStatus, setButtonStatus] = state;

  const onAddButton = () => {
    setEditMode(false);
    setAddMode(true);
    setButtonStatus(true);
    setSelectRule(false)
    setDBState(
      DBState.map((item) => {
        return { ...item, active: false };
      })
    );
  };

  return (
    <>
      <button disabled={buttonStatus} onClick={onAddButton}>
        NEW
      </button>
      {addMode ? (
        <ItemCardAddMode
          DBState={DBState}
          setDBState={setDBState}
          IdCounter={IdCounter}
          setIdCounter={setIdCounter}
          setEditMode = {setEditMode}
          setAddMode = {setAddMode}
          setSelectRule = {setSelectRule}
        />
      ) : null}
    </>
  );
}
