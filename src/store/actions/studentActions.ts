import actions from "./index";

export const setStudent = (studentDetails: any) => (dispatch: any) => {
    dispatch({ type: actions.SET_STUDENT_DETAILS, payload: studentDetails});
  };

  export const setFilteredStudent = (filteredStudents: any) => (dispatch: any) => {
    dispatch({ type: actions.SET_FILTERED_STUDENT_DETAILS, payload: filteredStudents});
  };