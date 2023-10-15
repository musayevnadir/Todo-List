/** @format */
import React, { useState } from "react";
import style from "./TodoList.module.css";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [arrayValue, setArrayValue] = useState([]);
  const [valBool, setValBool] = useState(false);

  // ! Input Value
  const takeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  // ! Add Button
  const clickAddButton = () => {
    if (inputValue !== "") {
      if (inputValue.length < 50) {
        setArrayValue([...arrayValue, inputValue]);
        setValBool(true);
        setInputValue("");
      } else {
        alert("The text is very long !!!!");
      }
    } else {
      alert("Please enter text !!!!");
    }
  };

  // ! Delete Button
  const clickDeleteButton = (index) => {
    const newArray = [...arrayValue];
    newArray.splice(index, 1);
    setArrayValue(newArray);
  };
  //  ?----------------------RETURN----------------------------
  return (
    <>
      <div className={style.todoListContainer}>
        <h1 className={style.todoListText}>Todo List</h1>
        <div className={style.inpAndBtnContainer}>
          <input
            className={style.input}
            type="text"
            placeholder="Add your todo"
            value={inputValue}
            onChange={takeInputValue}
          />
          <button className={style.btnAdd} onClick={clickAddButton}>
            Add
          </button>
        </div>

        {valBool ? (
          <div className={style.addedList}>
            <>
              {arrayValue.map((element, index) => {
                return (
                  <>
                    <p key={index} className={style.inputValue}>
                      {index + 1}
                      {")"} {element}
                    </p>
                    <button
                      className={style.btnDelete}
                      onClick={function () {
                        clickDeleteButton(index);
                      }}
                    >
                      Delete
                    </button>
                  </>
                );
              })}
            </>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default TodoList;
