import {NavLink, useLocation} from "react-router-dom";
import {Outlet} from "react-router-dom";

export default function AuthLayout() {
    const { pathname } = useLocation();

    const isSignUp = pathname.endsWith('/signup');

    return(
        <div className={`auth ${isSignUp ? ' auth--signup' : 'auth--login'}`}>
            <div className='auth--content'>
                <Outlet />
            </div>

            <NavLink
                to={isSignUp ? '/auth/login' : '/auth/signup'}
                className='auth__slider'
            >
                <button className='auth__sliderBtn'>
                    {isSignUp ? 'Login' : 'Sign Up'}
                </button>
            </NavLink>
        </div>
    )
}