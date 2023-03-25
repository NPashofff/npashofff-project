import './style.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function LoginForm() {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function navToRegister(){
        navigate('/register')
    }

    const handleSubmit = async (event, email, password) => {
        event.preventDefault();
        // perform validation and login logic here
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
            //setLoginError(false);
            navigate('/');
        } else {
            setUser({});
            console.log(data);
            alert(data.message);
            //setLoginError(true);
        }
        // } catch (error) {
        //   console.error(error);
        //   setUser(null);
        //   setLoginError(true);
        //   console.log("catch")
        // } 
        //    handleLogin(email, password);

    }

    return (
        <div className="login-form">
            <form id="login" method="POST" onSubmit={(e) => handleSubmit(e, email, password)}>
                <h1>Login</h1>
                <div className="content">
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder="Email"
                            autoComplete="nope"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                        // required
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        // required
                        />
                    </div>

                </div>
                <div className="action">
                    <button type='button' onClick={navToRegister}>Register</button>
                    <button type='submit'>Sign in</button>
                </div>
            </form>
        </div>
    )
}