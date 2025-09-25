import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../Home.jsx";
import About from "../About.jsx";
import Error from "../Error.jsx";
import Login, {SignUp} from "../LoginAndRegister.jsx";
import AuthLayout from "../AuthLayout.jsx";
import Account from "../Account.jsx";

export default function Routers({auth, setAuth, usersList, setUsersList}) {
    return (
        <Routes>
            <Route index element={<Home />} />

            <Route path='about' element={<About auth={auth} />} />

            <Route path='auth' element={<AuthLayout />} >
                <Route index element={<Navigate to='login' replace />} />
                <Route path='login' element={<Login
                    auth={auth}
                    setAuth={setAuth}
                />} />
                <Route path='signup' element={<SignUp
                    auth={auth}
                    setAuth={setAuth}
                    usersList={usersList}
                    setUsersList={setUsersList}
                />} />
            </Route>

            <Route path='account' >
                <Route path=':userId' element={<Account auth={auth}/>} />
            </Route>

            <Route path='*' element={<Error />} />
        </Routes>
    )
}