import React, { useState } from "react";

export default function Row(props) {
  console.log("geldiii");
  const [todo, setTodo] = useState(props.todo);

  const toogle = () => {
    var status = todo.status;
    if (todo.status) status = 0;
    else status = 1;
    setTodo({
      ...todo,
      status,
    });
  };
  const className = todo.status && 'bg-danger';
  return (
    <tr className={className}>
      <td>{todo.title}</td>
      <td>{todo.date}</td>
      <td>{todo.status}</td>
      <td>
        <button onClick={toogle} className="btn btn-success">
          Set me
        </button>
      </td>
    </tr>
  );
}
