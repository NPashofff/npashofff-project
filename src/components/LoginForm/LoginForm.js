import './style.css'
import { Link, u } from 'react-router-dom';
import { useState } from 'react';

export default function LoginForm({handleLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event, email, password) => {
        event.preventDefault();
        // perform validation and login logic here

        handleLogin(email, password);
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
                    <button type='button'><Link to={'/register'} className={'linkTextStyle'}>Register</Link></button>
                    <button type='submit'><Link to={'/'}>Sign in</Link></button>
                </div>
            </form>
        </div>
    )
}