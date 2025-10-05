import {NavLink} from "react-router-dom";

export default function Header({auth}) {

    const isActive = Boolean(auth.token);


    return (
        <header className="header-container" >
            <div className="header-container-child">
            <div className="container-buttons-header">
            <NavLink to='/about'><button className="button-header">About</button></NavLink>

                { isActive ?
                    <NavLink to={`/account/${auth.user.id}`}><button className="button-header">Account</button></NavLink>
                    :
                    <>
                    <NavLink to='/auth/login'><button className="button-header">Login</button></NavLink>
                    <NavLink to='/auth/signup'><button className="button-header">Register</button></NavLink>
                    </>
                }
            </div>
            </div>
        </header>
    )
}