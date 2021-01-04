import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/Actions/todoActions";
const AddTodo = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addTodo({ id: Math.random(), isComplete: false, text: text }));
    setText("");
  };
  return (
    <div className="Input-Containers">
      <div className="add-elements">
        <h1>Don't Forget to ...</h1>
        <h4></h4>
        <input
          type="text"
          id="myInput"
          placeholder=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button className="add-Btn" onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
