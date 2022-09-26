import { useContext, useState } from "react";
import { StatusContext } from "./ItemList";

export const ItemCardAddMode = ({
  setSelectRule,
  selectRule,
  DBState,
  setDBState,
  IdCounter,
  setIdCounter,
  setAddMode,
  setEditMode,
}) => {
  const state = useContext(StatusContext);
  const [buttonStatus, setButtonStatus] = state;
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newQuantityValue, setNewQuantityValue] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [saveButtonStatus, setSaveButtonStatus] = useState(true);
  const [errorMessageStatus, setErrorMessage] = useState(`block`);

  const changeToNone = () => {
    setSaveButtonStatus(false);
    setErrorMessage(`none`);
  };
  const changeToBlock = () => {
    setSaveButtonStatus(true);
    setErrorMessage(`block`);
  };

  const nameValue = (e) => {
    if (e.target.value && newPrice && newQuantityValue && newCategory) {
      changeToNone();
    } else {
      changeToBlock();
    }
    setNewName(e.target.value);
    setSelectRule(false)
  };

  const priceValue = (e) => {
    if (e.target.value && newName && newQuantityValue && newCategory) {
      changeToNone();
    } else {
      changeToBlock();
    }
    setNewPrice(e.target.value);
    setSelectRule(false)
  };

  const quantityValue = (e) => {
    if (e.target.value && newName && newPrice && newCategory) {
      changeToNone();
    } else {
      changeToBlock();
    }
    setNewQuantityValue(e.target.value);
    setSelectRule(false)

  };

  const categoryValue = (e) => {
    if (e.target.value && newName && newPrice && newQuantityValue) {
      changeToNone();
    } else {
      changeToBlock();
    }
    setNewCategory(e.target.value);
    setSelectRule(false)
  };

  const onCreate = () => {
    if (newName && newPrice) {
      setButtonStatus(false);
      setSaveButtonStatus(false);
      setIdCounter(++IdCounter)
      const newElement = {
        id: ++IdCounter,
        category: newCategory,
        name: newName,
        price: newPrice,
        quantityLeft: newQuantityValue,
        pictureURL: "https://www.computerhope.com/jargon/n/notebook.jpg",
        active: false,
      };
      //   ??????????????????????????????????????????????
      const tmpArr = DBState.map((item) => {
        return { ...item, active: false };
      });
      tmpArr.push(newElement);
      setDBState(tmpArr);
      setSelectRule(true)
    }
  };
  const onCancel = () => {
    setButtonStatus(false);
    setSelectRule(true);
    setAddMode(false);
    setEditMode(false);
    setDBState(
      DBState.map((item) => {
        return { ...item, active: false };
      })
    );
  };

  return (
    <>
      <div className="item-fullcard">
        <span>Add this item:</span>
        <p>
          Category:
          <input type="text" value={newCategory} onChange={categoryValue} />
        </p>
        <p>
          Name: <input type="text" value={newName} onChange={nameValue} />
        </p>
        <p>
          Price:
          <input type="number" value={newPrice} onChange={priceValue} />
        </p>
        <p>
          Quantity:
          <input
            type="number"
            value={newQuantityValue}
            onChange={quantityValue}
          />
        </p>
        <p style={{ color: "skyblue", display: errorMessageStatus }}>
          Fill all fields
        </p>
        <button disabled={saveButtonStatus} onClick={onCreate}>
          Create new
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </>
  );
};
