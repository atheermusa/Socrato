import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/LoginForm.css'

export default function LoginForm() {
    return (
        <div className="login-page-container">
            <div className="login-form-container">
                <form>
                    Username:
                    <br></br>
                    <input type="text" name="nameInput"/>
                    <br></br>
                    Password:
                    <br></br>
                    <input type="password" name="password"/>
                    <br></br>
                    <input type="submit" value="Login"/>
                </form>
                Not registered yet? Click <Link to="/register"> here </Link> to register
            </div>
        </div>
    )
}
