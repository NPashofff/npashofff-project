import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import { Routes, Route } from 'react-router-dom'
import MainElement from './components/MainElement/MainElement';



function App() {

  function LogIn() {
    console.log('cliced');
  };

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/' element={<MainElement LogIn={LogIn}/>} />

      </Routes>
    </>

  );
}

export default App;


