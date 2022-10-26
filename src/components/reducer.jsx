export const INITIAL_STATE = {
  ToDoText: ["toDo_1", "toDo_2", "toDo_3", "toDo_4", "toDo_5"],
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        ToDoText: [...state.ToDoText, action.payload],
      };
    default:
      return state;
  }
};
