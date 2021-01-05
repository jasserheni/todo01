import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/Actions/todoActions";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditTodo = ({ el }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editText, setEditText] = useState(el.text);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const dispatch = useDispatch();
  const editt = () => {
    dispatch(editTodo({ index: el.id, editedText: editText }));
    closeModal();
  };
  return (
    <div>
      <button className="btn" onClick={openModal}>
      <img  src='edit.png' alt='edit' />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          id="ModalInput"
          type="text"
          placeholder="Edit to do..."
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button className="Modal-Btn" onClick={editt}>
          Save
        </button>
        <button className="Modal-Btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default EditTodo;