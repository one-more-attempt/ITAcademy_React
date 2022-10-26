import { useState, useReducer } from "react";
import { INITIAL_STATE, toDoReducer } from "./reducer";

export const ToDoList = () => {
  const [textValue, setTextValue] = useState("");
  const [state, dispatch] = useReducer(toDoReducer, INITIAL_STATE);
  console.log(state);
  const createNewToDo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: textValue,
    });
  };

  return (
    <>
      {state.ToDoText.map((item, index) => {
        return (
          <div key={index} className="toDoWrapper">
            <div>{item}</div>
          </div>
        );
      })}
      <div className="toDoParams">
        <input
          type="text"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />
        <button onClick={createNewToDo}>NEW</button>
      </div>
    </>
  );
};

// Создать приложения списка дел(Todo-App),
// вынести данные в redux хранилище и отобразить на экране.
// Добавить возможность добавления в список дел нового элемента
