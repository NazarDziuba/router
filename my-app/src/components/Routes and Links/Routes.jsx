import {Routes, Route, Navigate} from "react-router";
import Home from "../Home.jsx";
import About from "../About.jsx";
import Error from "../Error.jsx";
import Login, {SignUp} from "../Login and Register.jsx";
import AuthLayout from "../AuthLayout.jsx";
import Account from "../Account.jsx";

export default function Routers() {
    return (
        <Routes>
            <Route index element={<Home />} />

            <Route path='about' element={<About />} />

            <Route path='auth' element={<AuthLayout />} >
                <Route index element={<Navigate to='login' replace />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
            </Route>

            <Route path='account' >
                <Route path=':userId' element={<Account />} />
            </Route>

            <Route path='*' element={<Error />} />
        </Routes>
    )
}