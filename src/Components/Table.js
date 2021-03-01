import React, { useState } from "react";
import Row from "./Row";
import { v4 as uuid } from 'uuid';

export default function Table() {
  const [todos, setTodo] = useState([
    { id: uuid(),title: "Eat", date: "Bugün", status: 0 },
    { id: uuid(),title: "Sleep", date: "Akşam", status: 0 },
  ]);

  const [visible, setVisible] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    date: "",
    status: 0
  });

  const toogle = () => {
    setVisible(!visible);
  };
  const saveTodo = () => {
    setTodo([
      ...todos,
      inputs
    ])
    console.log(todos)
    console.log(inputs)
  };

  const handleOnChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
      id : uuid()
    });
  };

  return (
    <div>
      <button onClick={toogle} className="btn btn-primary">
        Add Todo
      </button>
      {visible && (
        <div className="form-group col-4">
          <label>Name</label>
          <input
            className="form-control"
            value={inputs.title}
            name="title"
            onChange={handleOnChange}
          ></input>
          <label>Date</label>
          <input
            className="form-control"
            name="date"
            value={inputs.date}
            onChange={handleOnChange}
          ></input>
          <button onClick={saveTodo} className="btn btn-success">
            Save Todo
          </button>
        </div>
      )}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <Row key={todo.id} todo={todo} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
