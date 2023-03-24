import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import { Routes, Route } from 'react-router-dom'
import MainElement from './components/MainElement/MainElement';
import { useState, createContext } from 'react';

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState({});
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async (email, password) => {
    // if login is successful, setLoggedIn(true)
    // move it to requester
    // try {
      const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data);
        setLoginError(false);
      } else {
        setUser({});
        setLoginError(true);
      }
    // } catch (error) {
    //   console.error(error);
    //   setUser(null);
    //   setLoginError(true);
    //   console.log("catch")
    // }    
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='/login' element={<LoginForm handleLogin={handleLogin}/>} />
        <Route path='/' element={<MainElement />} />

      </Routes>
    </UserContext.Provider>

  );
}

export default App;


