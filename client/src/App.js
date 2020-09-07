import React from 'react';
import Header from './components/Header'
import AddTodo from './components/AddToDo'
import Todos from './components/Todos'
import {Provider} from './context'
import './App.css';

function App() {
  return (
    <Provider>
    <div className="app-container">
     <Header></Header>
     <AddTodo></AddTodo>
     <Todos></Todos>
    </div></Provider>
  );
}

export default App;
