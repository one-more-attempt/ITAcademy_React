import { useContext, useState } from "react";
import { StatusContext } from "./ItemList";
import { ItemCardReadMode } from "./ItemCardReadMode";
import { ItemCardEditMode } from "./ItemCardEditMode";
import { ItemCardAddMode } from "./ItemCardAddMode";

export function ItemCard({
  editMode,
  setEditMode,
  active,
  name,
  price,
  DBState,
  setDBState,
  id,
  setSelectRule,
  selectRule,
}) {
  const state = useContext(StatusContext);
  const [buttonStatus, setButtonStatus] = state;
  const [tmpNameValue, setTmpNameValue] = useState(name);
  const [tmpPriceValue, setTmpPriceValue] = useState(price);
  const [saveButtonStatus, setSaveButtonStatus] = useState(true);
  const [errorMessageStatus, setErrorMessage] = useState(`none`);

  const changeNameValue = (e) => {
    setButtonStatus(true);
    setTmpNameValue(e.target.value);
    if (e.target.value && tmpPriceValue) {
      setButtonStatus(true);
      setSaveButtonStatus(false);
      setErrorMessage("none");
      setSelectRule(false);
    } else {
      setSaveButtonStatus(true);
      setErrorMessage("block");
    }
  };

  const changePriceValue = (e) => {
    setTmpPriceValue(e.target.value);
    if (e.target.value && tmpNameValue) {
      setButtonStatus(true);
      setSaveButtonStatus(false);
      setErrorMessage("none");
      setSelectRule(false);
    } else {
      setSaveButtonStatus(true);
      setErrorMessage("block");
    }
  };

  const onSave = () => {
    const newStateArr = DBState.map((item) => {
      if (id === item.id) {
        return { ...item, name: tmpNameValue, price: tmpPriceValue };
      } else return { ...item };
    });
    console.log(newStateArr);
    setDBState(newStateArr);
    console.log(id);
    setSelectRule(true);
    setButtonStatus(false);
  };

  function onCancel() {
    setDBState(
      DBState.map((item) => {
        return { ...item, active: false };
      })
    );
    setEditMode(false);
    setButtonStatus(false);
    setSelectRule(true);
  }

  if (editMode) {
    return (
      <ItemCardEditMode
        tmpNameValue={tmpNameValue}
        tmpPriceValue={tmpPriceValue}
        changeNameValue={changeNameValue}
        changePriceValue={changePriceValue}
        onSave={onSave}
        setSelectRule={setSelectRule}
        selectRule={selectRule}
        onCancel={onCancel}
        DBState={DBState}
        setDBState={setDBState}
        saveButtonStatus={saveButtonStatus}
        setSaveButtonStatus={setSaveButtonStatus}
        errorMessageStatus={errorMessageStatus}
        setErrorMessage={setErrorMessage}
      />
    );
  } else
    return (
      <ItemCardReadMode
        name={name}
        price={price}
        setSelectRule={setSelectRule}
        selectRule={selectRule}
        onCancel={onCancel}
        DBState={DBState}
        setDBState={setDBState}
      />
    );
}
