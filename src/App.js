// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Todo from './Todo/Todo';
import TodoOutput from './TodoOutput/TodoOutput';

function App(){
  //[current data, updated data]
  const [inputList, setInputList] = useState('');
  const [Items, setItems] = useState([]);
  //converting Items into an array by just adding [] in useState
  //setItem can access the array that is empty for now

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  const listOfItems = () => {
    setItems((oldItems) =>{
      return [...oldItems, inputList]
    })
    setInputList('');
  }

  return (
    <div className="App">
      <h2>Todos</h2>
      <Todo name={itemEvent} val={inputList}/>
      <button onClick={listOfItems}>Add Todo</button>
      <TodoOutput item={Items}/>
    </div>
  );
}

export default App;
