import './style.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function LoginForm() {
    const [error, setError] = useState('');
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function navToRegister() {
        navigate('/register')
    }

    const handleSubmit = async (event, email, password) => {
        event.preventDefault();
        
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
            navigate('/');
        } else {
            setUser({});
            console.log(data);
            setError(data.message);
        }
    }

    return (
        <div className="login-form">
            <form id="login" method="POST" onSubmit={(e) => handleSubmit(e, email, password)}>
                <h1>Login</h1>
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