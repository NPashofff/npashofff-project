import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

export default function RegisterForm() {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != comfirmPassword) {
            alert('Password not mach');
        } else {
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                //console.log(data);
                //setUser(data);
                //setLoginError(false);
                navigate('/login');
            } else {
                //setUser({});
                console.log(data);
                alert(data.message);
                //setLoginError(true);
            }
        }
    }

    function navToLogin() {
        navigate('/login');
    }

    return (
        <div className="login-form">
            <form method="POST" onSubmit={(e) => handleSubmit(e, email, password)}>
                <h1>Reagister</h1>
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
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Comfirm Password"
                            value={comfirmPassword}
                            onChange={(event) => setComfirmPassword(event.target.value)}
                        // required
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