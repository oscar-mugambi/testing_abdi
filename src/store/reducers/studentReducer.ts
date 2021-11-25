import { studentDetails } from "./../../components/fixture";

import actions from "../actions";

export default (state = [], action: any) => {
  switch (action.type) {
    case actions.SET_STUDENT_DETAILS:
      return [...state, { ...action.payload }];
    case actions.SET_FILTERED_STUDENT_DETAILS:
      return [ ...action.payload ];
    default:
      return state;
  }
};
