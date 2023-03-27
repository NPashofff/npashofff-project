import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import { Routes, Route } from 'react-router-dom'
import MainElement from './components/MainElement/MainElement';
import { useState, createContext } from 'react';
import RegisterForm from './components/LoginForm/RegistrForm';
import { RouteGuard } from './components/Common/RouteGuard';

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState({});

  //const [loginError, setLoginError] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/' element={<MainElement />} />
        <Route element={<RouteGuard />}>
          {/* Register zone */}

        </Route>
      </Routes>
    </UserContext.Provider>

  );
}

export default App;


