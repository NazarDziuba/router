import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Login({auth, setAuth, usersList}) {

    const [draft, setDraft] = useState(
        {
            email: "",
            password: "",
            phoneNumber: ""
        }
    );

    const navigate = useNavigate();


    const [isEmail, setIsEmail] = useState(false);

    const onChange = (e) => {
        const opt = e.target.options;
        const curr = opt[opt.selectedIndex].index
        curr === 0 && setIsEmail(false);
        curr === 1 && setIsEmail(true);
    }

    const addEmailOrPhone = e => isEmail
        ?
        setDraft(
            {
                ...draft,
                email: e.target.value,
                phoneNumber: ''
            }
        )
        :
        setDraft(
            {
                ...draft,
                phoneNumber: e.target.value,
                email: ''
            }
        )

    const login = (e) => {
        e.preventDefault();
        if(usersList.length < 1) return
        const val = isEmail
            ?
            usersList.filter(user => user.user.email === draft.email)
            :
            usersList.filter(user => user.user.phoneNumber === draft.phoneNumber);
        const currAcc = val[0];
        if(draft.password !== currAcc.user.password) return alert('Invalid password');
        setAuth(currAcc);
        localStorage.setItem('auth', JSON.stringify(currAcc));
        navigate(`/account/${currAcc.user.id}`, {replace: true})

    }

    console.log(draft)



    return(
        <form className="login-form" onSubmit={e => login(e)}>
        <div className="login-child">
            <div className="login-child-elements" >
            <div className="login-inputs">
                <div className="login-select-cont">
                    <div className="login-input">
                        <label htmlFor='log'>Enter your Email or phone number:</label>
                        <input type={isEmail ? 'email' : 'tel'}
                               value={isEmail ? draft.email : draft.phoneNumber}
                               id='log'
                               placeholder={`Type your ${isEmail ? 'Email' : 'phone number'}`}
                               className='login-input-field' required
                               onChange={e => addEmailOrPhone(e)}
                        />
                    </div>
                    <select className='login-select' onChange={onChange}>
                        <option value='PhoneNumber'>Phone number</option>
                        <option value='Email'>Email</option>
                    </select>
                </div>
                <div className="password-container">
                    <label htmlFor='passwordLogin'>Enter your password:</label>
                    <input type='password'
                           placeholder='Type your password'
                           value={draft.password}
                           id='passwordLogin'
                           className='password-input-field'
                           onChange={e => setDraft(({...draft, password: e.target.value}))}
                           required />
                </div>
            </div>
            <div className="login-button-div">
                <button type='submit' className="login-button">Login</button>
            </div>
            </div>
        </div>
        </form>
    )
}

export function SignUp({auth, setAuth, usersList, setUsersList}) {



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

    const userId = Date.now()

    const registerAndAdd = () => {
        const next = {
            user: {
                id: userId,
                email: user.email,
                password: user.password,
                username: user.username,
                phoneNumber: user.phoneNumber,
            },
            token: crypto.randomUUID()};
        setAuth(next);
        localStorage.setItem('auth', JSON.stringify(next));

        const current = JSON.parse(localStorage.getItem('usersList') || '[]');
        const updated = [...current, next];
        setUsersList?.(prev => (Array.isArray(prev) ? [...prev, next] : [next]))
        localStorage.setItem('usersList', JSON.stringify(updated));
    }

    const onSubmit = (e) => {

        e.preventDefault();

        if(user.password !== user.confirmPassword) return

        registerAndAdd()

        navigate(`/account/${userId}`, {replace: true, viewTransition: true})
    }


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
                        <label htmlFor='passwordSignUp'>Enter your password:</label>
                        <input type='password' id='passwordSignUp' placeholder='Type your password' className='password-sign-input signUp-input' required
                        value={user.password}
                        onChange={(e) => setUser(u => ({...u, password: e.target.value}))}
                        />
                    </div>
                    <div className='confPass-container signup-input-container'>
                        <label htmlFor='passwordConfirm'>Confirm your password:</label>
                        <input type='password' id='passwordConfirm' placeholder='Password' className='password-confirm-input signUp-input' required
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

