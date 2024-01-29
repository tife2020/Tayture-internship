import React from "react";

function TodoItem(props) {
  return (
    <li
      onClick={() => {
        props.delClicked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
