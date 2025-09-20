import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {


    return(
        <div className="login-child">
            <div className="login-child-elements" >
            <div className="login-inputs">
                <div className="login-select-cont">
                    <div className="login-input">
                        <label htmlFor='log'>Enter your Email or phone number:</label>
                        <input type='tel' id='log' placeholder='Type your Email or phone number' className='login-input-field' required />
                    </div>
                    <select className='login-select'>
                        <option value='PhoneNumber'>Phone number</option>
                        <option value='Email'>Email</option>
                    </select>
                </div>
                <div className="password-container">
                    <label htmlFor='password'>Enter your password:</label>
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



    const navigate = useNavigate();
    const[user, setUser] = useState(
        {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            phoneNumber: "",
        }
    );

    const onSubmit = (e) => {

        e.preventDefault();

        if(user.password !== user.confirmPassword) return

        const userId = Date.now()

        navigate(`/account/${userId}`, {replace: true, viewTransition: true})
    }

console.log(user)

    return(
        <form onSubmit={onSubmit} className='signUp-form'>
            <div className="signup-child">
                <div className="signup-child-elements">
                    <div className='email-container signup-input-container'>
                        <label htmlFor='email'>Enter your Email:</label>
                        <input type='email' id='email' placeholder='Type your Email or Phone number' className='email-input signUp-input' required
                        value={user.email}
                        onChange={(e) => setUser(u => ({...u, email: e.target.value}))}
                        />
                    </div>
                    <div className='phone-container signup-input-container'>
                        <label htmlFor='tel'>Enter your phone number:</label>
                        <input type='tel' id='tel' placeholder='Type your Phone number' className='phone-input signUp-input' required
                        value={user.phoneNumber}
                        onChange={(e) => setUser(u => ({...u, phoneNumber: e.target.value}))}
                        />
                    </div>
                    <div className='pass-container signup-input-container'>
                        <label htmlFor='password'>Enter your password:</label>
                        <input type='password' id='password' placeholder='Type your password' className='password-sign-input signUp-input' required
                        value={user.password}
                        onChange={(e) => setUser(u => ({...u, password: e.target.value}))}
                        />
                    </div>
                    <div className='confPass-container signup-input-container'>
                        <label htmlFor='password'>Confirm your password:</label>
                        <input type='password' id='password' placeholder='Password' className='password-confirm-input signUp-input' required
                        value={user.confirmPassword}
                        onChange={(e) => setUser(u => ({...u, confirmPassword: e.target.value}))}
                        />
                    </div>
                    <div className='userName-container signup-input-container'>
                        <label htmlFor='text'>Enter your user name:</label>
                        <input type='text' id='text' placeholder='Type your user name' className='username-input signUp-input' required
                        value={user.username}
                        onChange={(e) => setUser(u => ({...u, username: e.target.value}))}
                        />
                    </div>
                    <div className='button-container'>
                            <button type='submit' className="signup-button">Sign up</button>
                    </div>
                </div>
            </div>
        </form>
    )
}