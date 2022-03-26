import React from 'react'
import './App.css';
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;
