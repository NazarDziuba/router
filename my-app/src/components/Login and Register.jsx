import {useState} from "react";
import {generatePath, NavLink} from "react-router";

export default function Login() {
    const[user, setUser] = useState(
        {
            email: "",
            name: "",
            password: "",
            id: Date.now()
        }
    );



    return(
        <div className="login-child">
            <div className="login-child-elements" >
            <div className="login-inputs">
                <div className="login-select-cont">
                    <div className="login-input">
                        <label for='log'>Enter your Email or phone number:</label>
                        <input type='tel' id='log' placeholder='Type your Email or phone number' className='login-input-field' required />
                    </div>
                    <select className='login-select'>
                        <option value='PhoneNumber'>Phone number</option>
                        <option value='Email'>Email</option>
                    </select>
                </div>
                <div className="password-container">
                    <label for='password'>Enter your password:</label>
                    <input type='password' placeholder='Type your password' id='password' className='password-input-field' required />
                </div>
            </div>
            <div className="login-button-div">
                <button type='submit' className="login-button">Login</button>
            </div>
            </div>
        </div>
    )
}

export function SignUp() {
    return(
            <div className="signup-child">
                <div className="signup-child-elements">
                    <div className='email-container signup-input-container'>
                        <label for='email'>Enter your Email:</label>
                        <input type='email' id='email' placeholder='Type your Email or Phone number' className='email-input signUp-input' required />
                    </div>
                    <div className='phone-container signup-input-container'>
                        <label for='tel'>Enter your phone number:</label>
                        <input type='tel' id='tel' placeholder='Type your Phone number' className='phone-input signUp-input' required />
                    </div>
                    <div className='pass-container signup-input-container'>
                        <label for='password'>Enter your password:</label>
                        <input type='password' id='password' placeholder='Type your password' className='password-sign-input signUp-input' required />
                    </div>
                    <div className='confPass-container signup-input-container'>
                        <label for='password'>Confirm your password:</label>
                        <input type='password' id='password' placeholder='Password' className='password-confirm-input signUp-input' required />
                    </div>
                    <div className='userName-container signup-input-container'>
                        <label for='text'>Enter your user name:</label>
                        <input type='text' id='text' placeholder='Type your user name' className='username-input signUp-input' required />
                    </div>
                    <div className='button-container'>
                        <NavLink to={generatePath('/account/:userId', {userId: user.id})} >
                            <button type='submit' className="signup-button">Sign up</button>
                        </NavLink>
                    </div>
                </div>
            </div>
    )
}