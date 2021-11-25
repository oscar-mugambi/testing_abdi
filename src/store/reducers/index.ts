 
import { combineReducers } from "redux";
import modalReducer from "./modalReducer";

import studentReducer from "./studentReducer";
import ModalReducer from "./modalReducer"




export default combineReducers({
  students: studentReducer,
  modalState:ModalReducer
  
  
});