import actions from "./index";

export const setModal = (modalValue: Boolean) => (dispatch: any) => {
    dispatch({ type: actions.SET_MODAL, payload: modalValue});
  };