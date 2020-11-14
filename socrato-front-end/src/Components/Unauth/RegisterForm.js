import React from 'react'
import { Link } from 'react-router-dom'
import "../../Style/RegistrationForm.css"

export default function RegisterForm() {
    return (
        <div className = "registration-page-container">
            <div className="registration-form-container">
                <form>
                    Username:
                    <br></br>
                    <input type="text" name="nameInput"/>
                    <br></br>
                    Password:
                    <br></br>
                    <input type="password" name="password"/>
                    <br></br>
                    Please Re-enter Password:
                    <br></br>
                    <input type="password" name="password"/>
                    <br></br>
                    <input type="submit" value="Login"/>
                </form>
                Already Registered? Click  <Link to="/login"> here </Link> to login
            </div>
        </div> 
    )
}
