import React, { useEffect, useState } from "react";
import "../styles/studentDetails.css";
import { Table } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import AddStudent from "./buttons/AddStudent";
import StudentModal from "./modal/StudentModal";
import { setModal } from "../store/actions/modalActions";
import { setFilteredStudent } from "../store/actions/studentActions";
const StudentDetailsTable: React.FC = (): JSX.Element => {
  const tablelabels = [
    "FIRST NAME",
    "LAST NAME",
    "DATE OF BIRTH",
    "COURSE",
    "HOURS",
    "PRICE",
    "",
    "",
  ];

  const studentData = useSelector((state: any) => state?.students);

  const modalState = useSelector((state: any) => state?.modalState.modalState);

  const dispatch = useDispatch();

  const onDelete = (studentId: number) => {
    const filteredDetails = studentData.filter(
      (stud: any) => stud.id !== studentId
    );
    dispatch(setFilteredStudent(filteredDetails));
    //  setFilteredStudDetails(filteredDetails)
  };

  console.log("student data", studentData);
  return (
    <div className="container">
      <div></div>
      <div>
        <AddStudent name="Add Student" />

        {modalState ? <StudentModal /> : ""}
        <Table striped>
          <Table.Header>
            <Table.Row>
              {tablelabels.map((label, index) => (
                <Table.HeaderCell key={index.toString()}>
                  {label}
                </Table.HeaderCell>

              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {studentData?.map((student: any) => (
              <Table.Row key={student.id}>
                <Table.Cell>{student.firstName}</Table.Cell>
                <Table.Cell>{student.lastName}</Table.Cell>
                <Table.Cell>{student.dob}</Table.Cell>
                <Table.Cell>{student.course}</Table.Cell>
                <Table.Cell>{`${student.hours}H`}</Table.Cell>
                <Table.Cell>{`${student.price} £`}</Table.Cell>
                <Table.Cell

                  style={{ color: "rgba(0, 193, 177, 1)", cursor: "pointer" }}
                >
                  Edit
                </Table.Cell>
                <Table.Cell

                  style={{ color: "rgba(0, 193, 177, 1)", cursor: "pointer" }}
                  onClick={() => onDelete(student.id)}
                >
                  Delete
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div></div>
    </div>
  );
};
export default StudentDetailsTable;
