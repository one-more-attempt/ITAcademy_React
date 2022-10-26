import { useState, useReducer } from "react";
import JSONData from "../../database.json";
import { TableRow } from "./TableRow";
import { NewElement } from "./NewItem";
import { ItemCard } from "./ItemCard";
import { useContext, createContext } from "react";
import { INITIAL_STATE, countReducer } from "../reducer/reducer";

export const StatusContext = createContext();
const dataBase = JSONData.dataBase;

export const ItemList = () => {
  const [GlobalState, dispatch] = useReducer(countReducer, INITIAL_STATE);
  // const addToOrder = (val) => {
  //   dispatch({ type: "ADD_TO_ORDER", payload: val });
  // };
  const [DBState, setDBState] = useState(dataBase);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [globalModalStatus, setGlobalModalStatus] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectRule, setSelectRule] = useState(true);
  const [addMode, setAddMode] = useState(false);
  const [IdCounter, setIdCounter] = useState(1234);

  console.log(GlobalState);
  return (
    <>
      <StatusContext.Provider value={[buttonStatus, setButtonStatus]}>
        <div>Order Count: {GlobalState.count}$</div>

        <div className="itemListWrapper">
          {DBState.map((item, index) => {
            return (
              <>
                <TableRow
                  category={item.category}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantityLeft}
                  imgURL={item.pictureURL}
                  key={item.id}
                  id={item.id}
                  globalModalStatus={globalModalStatus}
                  setGlobalModalStatus={setGlobalModalStatus}
                  active={item.active}
                  DBState={DBState}
                  setDBState={setDBState}
                  editMode={editMode}
                  setEditMode={setEditMode}
                  selectRule={selectRule}
                  setSelectRule={setSelectRule}
                  addMode={addMode}
                  setAddMode={setAddMode}
                />
                <div className="ADDBUTTON">
                 
                  <button
                    onClick={() => {
                      dispatch({ type: "ADD_TO_ORDER", payload: item.price });
                    }}
                  >
                    +
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <NewElement
          DBState={DBState}
          setDBState={setDBState}
          editMode={editMode}
          setEditMode={setEditMode}
          selectRule={selectRule}
          setSelectRule={setSelectRule}
          addMode={addMode}
          setAddMode={setAddMode}
          IdCounter={IdCounter}
          setIdCounter={setIdCounter}
        />
      </StatusContext.Provider>
    </>
  );
};
