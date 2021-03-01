import React, { useState } from "react";
import EditModal from "./EditModal";
import Modal from './EditModal'
 

export default function Row(props) {
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

  const openModal = () =>  {

  }

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
        <button onClick={props.delete} id={todo.id} className="btn btn-danger ml-3">
          Delete
        </button>

      </td>

    </tr>
  );
}
