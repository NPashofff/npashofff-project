import './style.css'
import { Link } from 'react-router-dom';
import { useContext } from "react"

export default function LoginForm() {
    return (
        <div className="login-form">
            <form>
                <h1>Login</h1>
                <div className="content">
                    <div className="input-field">
                        <input type="email" placeholder="Email" autoComplete="nope"/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" autoComplete="new-password"/>
                    </div>
                    <a href="#" className="link">Forgot Your Password?</a>
                </div>
                <div className="action">                    
                    <button type='button'><Link to={'/register'} className={'linkTextStyle'}>Register</Link></button>
                    <button type='button'>Sign in</button>
                </div>
            </form>
        </div>
    )
}