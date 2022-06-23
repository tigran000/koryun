import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_MODE } from './redux';

const getUser = (state) => state;

function User({ id, name, lastName, isEditMode }) {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        padding: 20,
        margin: 20,
        border: "1px solid red",
      }}
    >
      {isEditMode ? <input value={`${name} ${lastName}`} /> :
      <div style={{
        color: 'red',
      }}>{`${name} ${lastName}`}</div>}
      <div>{id}</div>
      <button onClick={() => dispatch({type: EDIT_MODE, payload: { id } })}> EDIT </button>
    </div>
  );
}

const renderUsers = (user) => <User {...user} />;

function App() {
  const users = useSelector(getUser);
  console.log("users", users);
  return users.map(renderUsers);
}

export default App;
