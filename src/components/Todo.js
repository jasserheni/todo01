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
        <div  style={{justifyContent:"space-between"}} class="checkbox">
            <input type="checkbox" name="packersOff" id="packers" value="1"/>
            <label for="packers" class="strikethrough">{el.text}</label>
        </div>
     </div>
          <div
           
          >
            <EditTodo el={el} />
            <button onClick={deletee} className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style={{ fill: "#7c7c7c" }}
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#7c7c7c">
                    <path d="M71.66667,14.33333l-7.16667,7.16667h-35.83333v14.33333h114.66667v-14.33333h-35.83333l-7.16667,-7.16667zM35.83333,50.16667v107.5h100.33333v-107.5zM67.43945,71.66667l18.56055,18.56055l18.56055,-18.56055l10.10612,10.10612l-18.56055,18.56055l18.56055,18.56055l-10.10612,10.10612l-18.56055,-18.56055l-18.56055,18.56055l-10.10612,-10.10612l18.56055,-18.56055l-18.56055,-18.56055z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
