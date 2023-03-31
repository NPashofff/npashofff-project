import './style.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { requestFactory } from '../../services/requester';

export default function RegisterForm() {
    const request = requestFactory();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,12}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ;
    function navToLogin() {
        navigate('/login');
    }

    const isInvalidEmail = (email) => {
        if (email.toLowerCase().match(emailRegex)) return false;        
            
        return true;
    };

    const isInvalidPassword = (password) => {
        if (password.match(passRegex)) return false;

        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email.length >= 6 && email.length <= 50) {
            setError("Email must be between 6 and 50 charecter")
        }

        if (isInvalidEmail(email)) {
            setError("Invalid email address");
            return;
        }

        if (password !== comfirmPassword) {
            setError('Password don`t mach');
            return;
        }

        //comment for easy testing

        // if (password.length <= 6 || password.length >= 12) {
        //     setError('Password must be between 6 and 12 charecter');
        //     return;
        // }
         
        // if (isInvalidPassword(password)) {
        //     setError("Password must contains at least one uppercase letter, one lowercase letter and number");
        //     return;
        // }

        try {
            const data = await request.post('/users/register', { email, password })
            navigate('/login');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="login-form">
            <form method="POST" onSubmit={(e) => handleSubmit(e, email, password)}>
                <h1>Reagister</h1>
                <div className="content">
                    <div>
                        <span style={{ color: "red" }}>{error}</span>
                    </div>
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder="Email"
                            autoComplete="nope"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Comfirm Password"
                            value={comfirmPassword}
                            onChange={(event) => setComfirmPassword(event.target.value)}
                        />
                    </div>

                </div>
                <div className="action">
                    <button type='button' onClick={navToLogin}>Login</button>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}