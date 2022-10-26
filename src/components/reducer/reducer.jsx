export const INITIAL_STATE = {
  count: 0,
};

export const countReducer = (GlobalState, action) => {
  switch (action.type) {
    case "ADD_TO_ORDER":
      return {
        ...GlobalState,
        count: GlobalState.count + action.payload,
      };
    default:
      return GlobalState;
  }
};
