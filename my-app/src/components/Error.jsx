import {Outlet} from 'react-router-dom'
import {NavLink} from "react-router";

export default function Error () {
    return (
        <>
        <h1>404</h1>
            <NavLink to={'/'}><button>Home</button></NavLink>
        <Outlet />
        </>
    )
}