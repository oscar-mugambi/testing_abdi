import actions from "../actions";

export default (state = {}, action: any) => {
  switch (action.type) {
    case actions.SET_MODAL:
      return { ...state, modalState: action.payload };

    default:
      return state;
  }
};
