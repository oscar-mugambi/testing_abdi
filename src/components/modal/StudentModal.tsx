import React from "react";
import { useState, useEffect } from "react";
import "../../styles/modalStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Header } from "semantic-ui-react";
import AddStudent from "../buttons/AddStudent";
import { setStudent } from "../../store/actions/studentActions";
import { setModal } from "../../store/actions/modalActions";

const StudentModal: React.FC = () => {
  const modalState = useSelector((state: any) => state?.modalState.modalState);
  const studentDetails = {
    id: Math.random(),
    firstName: "",
    lastName: "",
    dob: "",
    course: "",
    hours: "",
    price: 0,
  };
  const [studentFormData, setStudentFormData] = useState(studentDetails);

  const formHandler = (e: any) => {
    e.preventDefault();
    setStudentFormData({ ...studentFormData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const addStudentDetails = () => {
    dispatch(setStudent(studentFormData));
    dispatch(setModal(false));
  };
  const onModalCancel = () => {
    setStudentFormData({
      id: Math.random(),
      firstName: "",
      lastName: "",
      dob: "",
      course: "",
      hours: "",
      price: 0,
    });

    dispatch(setModal(false));
  };

  return (
    <div>
      <Modal open={modalState} style={{ width: "1040px" }}>
        <div className="modal-header">
          <h3>Add Student</h3>

          <div onClick={onModalCancel}>&times;</div>
        </div>
        <form>
          <div className="field-flex">
            <div>
              <label>First Name</label> <br />
              <input
                type="text"
                name="firstName"
                onChange={formHandler}
                required
                defaultValue={studentFormData.firstName}
                className="input-medium"
              />
            </div>
            <div>
              <label>Last Name</label> <br />
              <input
                type="text"
                name="lastName"
                onChange={formHandler}
                className="input-medium"
              />
            </div>
            <div>
              <label>Date of Birth</label> <br />
              <input
                type="text"
                name="dob"
                onChange={formHandler}
                className="input-small"
              />
            </div>
            <div>
              <label>Course Name</label> <br />
              <input
                type="text"
                name="course"
                onChange={formHandler}
                className="input-large"
              />
            </div>
            <div>
              <label>Hours</label> <br />
              <input
                type="text"
                name="hours"
                onChange={formHandler}
                className="input-hours"
              />
            </div>
            <div>
              <label>Price £ </label> <br />
              <input
                type="text"
                name="price"
                onChange={formHandler}
                className="input-medium"
              />
            </div>
          </div>
        </form>

        <div className="modal-footer">
          <Button onClick={addStudentDetails}>Save</Button>
        </div>
      </Modal>
    </div>
  );
};

export default StudentModal;
