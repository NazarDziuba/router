import logo from '../../assets/user.png'
import {Outlet, useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";

export default function AccountInfo({auth, setAuth}) {

    const navigate = useNavigate();

    const logOut = () => {
        setAuth({user: null, token: null})
        localStorage.removeItem('auth')
        navigate('/', {replace: true})
    }

    return (
        <div className="account-wrapper">
            <div className="account-main">
                <div className="account-user-img">
                    <img alt="UserAvatar" src={logo} className="user-img" />
                </div>
                <div className="account-user-info">
                    <div className="account-user-info-name account-user-info-subDiv">
                        <h2 className='account-user-info-name-h2'>User Name</h2>
                        <p className="account-user-info-name-p">{auth.user.username}</p>
                    </div>
                    <div className="account-user-info-email account-user-info-subDiv">
                        <h2 className="account-user-info-email-h2">Email Address</h2>
                        <p className="account-user-info-email-p">{auth.user.email}</p>
                    </div>
                    <div className="account-user-info-phone account-user-info-subDiv">
                        <h2 className="account-user-info-phone-h2">Phone Number</h2>
                        <p className="account-user-info-phone-p">{auth.user.phoneNumber}</p>
                    </div>
                </div>
                <div className="account-buttons">
                    <div className="account-user-log-out-subDiv">
                        <button type='button' className='account--btn' onClick={() => logOut()}>Log Out</button>
                    </div>
                    <div className="account-user-security-subDiv">
                        <NavLink to='security'>
                            <button type='button' className='account--btn'>Security</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}