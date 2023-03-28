import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import { Routes, Route, useLocation } from 'react-router-dom'
import MainElement from './components/MainElement/MainElement';
import { useState, createContext } from 'react';
import RegisterForm from './components/LoginForm/RegistrForm';
import { RouteGuard } from './components/Common/RouteGuard';
import SidebarElement from './components/SidebarElement/SidebarElement';
import Counter from './components/Counter';
import Mounter from './components/Mounter';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const location = useLocation();
  const hideSidebar = location.pathname === "/login" || location.pathname === "/register";

  //const [loginError, setLoginError] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {!hideSidebar && (
        <div class="left-div">
          <SidebarElement />
        </div>
      )}
      <div class={!hideSidebar ? "right-div" : ""}>
        <Routes>
          {/* Guest Content */}
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/' element={<MainElement />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/mounter' element={<Mounter />} />

          <Route element={<RouteGuard />}>
            {/* Main Content for login */}

          </Route>
        </Routes>
      </div>
    </UserContext.Provider>

  );
}

export default App;


