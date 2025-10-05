import Routers from "./components/Routes and Links/Routes.jsx"
import Header from "./components/header.jsx"
import {useState} from "react";

export default function App() {
    const safeParse = (key, fallback) => {
        try{
            const raw = localStorage.getItem(key);
            if(raw == null) return fallback;
            const value = JSON.parse(raw);
            return value ?? fallback;
        }
        catch{
            return fallback;
        }
    }

    const [auth, setAuth] = useState(() => safeParse("auth", {user: null, token: null}));
    const [usersList, setUsersList] = useState(() => safeParse("usersList", []));
    console.log(auth)
    console.log(usersList)

    const BASE = "https://www.themealdb.com/api/json/v1/1/"
    async function fetchData(endpoint, params={}) {
        const url = new URL(endpoint, BASE);
        Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value))
        const res = await fetch(url)
        if(!res.ok) throw new Error(`HTTP ${res.status}`)
        return await res.json()
    }


    return (
        <main>
            <Header auth={auth} setAuth={setAuth} />
            <div className="divs-container">
            <Routers auth={auth}
                     setAuth={setAuth}
                     usersList={usersList}
                     setUsersList={setUsersList}
                     fetchData={fetchData}
            />
            </div>
        </main>
    )
}