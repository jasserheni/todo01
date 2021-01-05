import React from "react";
import EditTodo from "./Todoedit";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/Actions/todoActions";

const Todo = ({ el }) => {
  const dispatch = useDispatch();
  const deletee = () => {
    dispatch(deleteTodo(el.id));
  };
  const complete = () => {
    dispatch(completeTodo(el.id));
  };
  return (
    <div>
      <ul id="myUL">
        <li>
       
    <div  style={{ padding :"40px" ,
              
              
   }} class="col-md-5">
        <div  style={{justifyContent:"space-between" ,width:'20px'}} class="checkbox">
            <input   onClick={complete} type="checkbox" name="packersOff" id="packers" value="1"/>
            <label for="packers" class="strikethrough">{el.text}</label>
        </div>
     </div>
          <div
           
          >
            <EditTodo el={el} />
            <button onClick={deletee} className="btn">
            <img src='trash.png' alt='delete'/>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
