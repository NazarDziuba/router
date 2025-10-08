import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../Home.jsx";
import About from "../About.jsx";
import Error from "../Error.jsx";
import Login, {SignUp} from "../LoginAndRegister.jsx";
import AuthLayout from "../AuthLayout.jsx";
import AccountSecurity from "../Account/AccountSecurity.jsx";
import AccountInfo from "../Account/AccountInfo.jsx";
import AccountLayout from "../Account/AccountLayout.jsx";
import Catalog from "../Catalog.jsx";
import Meal from "../Meal.jsx";
import Receipt from "../Receipt.jsx";

export default function Routers({auth, setAuth, usersList, setUsersList, fetchData}) {
    return (
        <Routes>
            <Route index element={<Home />} />

            <Route path='about' element={<About auth={auth} />} />

            <Route path='auth' element={<AuthLayout />} >
                <Route index element={<Navigate to='login' replace />} />
                <Route path='login' element={<Login
                    auth={auth}
                    setAuth={setAuth}
                    usersList={usersList}
                />} />
                <Route path='signup' element={<SignUp
                    auth={auth}
                    setAuth={setAuth}
                    usersList={usersList}
                    setUsersList={setUsersList}
                />} />
            </Route>

            <Route path='account' >
                <Route path=':userId' element={<AccountLayout />} >
                    <Route index element={<AccountInfo
                        auth={auth}
                        setAuth={setAuth}
                    />} />
                    <Route path='security' element={<AccountSecurity
                        auth={auth}
                        setAuth={setAuth}
                        usersList={usersList}
                        setUsersList={setUsersList}
                    />} />
                </ Route>
            </Route>

            <Route path='catalog' >
                <Route index element={<Catalog
                    fetchData={fetchData}
                />} />
                <Route path=':category' element={<Meal
                    fetchData={fetchData}
                />}>
                    <Route path=':receiptId' element={<Receipt/>}/>
                </Route>
            </Route>

            <Route path='*' element={<Error />} />
        </Routes>
    )
}