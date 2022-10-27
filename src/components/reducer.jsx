export const INITIAL_STATE = {
  data: [],
};

export const HistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_HISTORY":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
