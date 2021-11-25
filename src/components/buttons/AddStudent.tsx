import { Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/actions/modalActions";

export default function AddStudent(props: any): JSX.Element {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);

  const modalHandler = () => {
    setModalState(true);

    dispatch(setModal(modalState));
  };

  return (
    <div>
      <Button
        onClick={modalHandler}
        style={{ backgroundColor: "rgba(0, 193, 177, 1)", color: "white" }}
      >
        {props.name}
      </Button>
    </div>
  );
}
