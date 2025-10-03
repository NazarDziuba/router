import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function AccountSecurity({auth, setAuth, usersList, setUsersList}) {

    const userId = useParams()

    const[raw, setRaw] = useState(
        {
            phoneNumber: auth.user.phoneNumber,
            password: '',
            username: auth.user.username,
        }
    );

    const navigate = useNavigate();

    const saveChanges = (e) => {
        e.preventDefault();

        const next = {
            token: auth.token,
            user: {
                id: auth.user.id,
                email: auth.user.email,
                phoneNumber: raw.phoneNumber,
                password: raw.password,
                username: raw.username
            }
        }
        setAuth(prev => ({...prev,
            phoneNumber: raw.phoneNumber,
            password: raw.password,
            username: raw.username
        }))
        localStorage.setItem('auth', JSON.stringify(next))

        const allData = (() => {
            try{return JSON.parse(localStorage.getItem('usersList') ?? "[]")}
            catch {return []}
        })()
        console.log(allData);
        const id = auth.user.id
        console.log(id)
        const result = allData.map(item => item.user.id === id ? next : item)

        localStorage.setItem('usersList', JSON.stringify(result))

        navigate('../', {replace: true})

    }

    return (
        <div className="account-security-main">
        <h2>Account #{userId.userId}</h2>
        <div className="account-security-wrapper">
            <form className="account-security-form" onSubmit={(e) => saveChanges(e)}>
                <div className="account-security-inputs">
                    <div className="account-security-sub-div">
                        <label htmlFor="input-change-name">Change User Name</label>
                        <input type="text"  id='input-change-name' className="account-security-input input-change-name" onChange={
                            (e) => setRaw(t => ({...t, username: e.target.value}))
                        } value={raw.username} required />
                    </div>

                    <div className="account-security-sub-div">
                        <label htmlFor="input-change-phone">Change Phone Number</label>
                        <input type="tel" id='input-change-phone' className="account-security-input input-change-phone" onChange={
                            (e) => setRaw(t => ({...t, phoneNumber: e.target.value}))
                        } value={raw.phoneNumber} required />
                    </div>

                    <div className="account-security-sub-div">
                        <label htmlFor="input-change-pass">Change Password</label>
                        <input type="password" id='input-change-pass' className="account-security-input input-change-pass" onChange={
                            (e) => setRaw(t => ({...t, password: e.target.value}))
                        } value={raw.password} required />
                    </div>
                </div>
                <div className="account-security-button-div">
                    <button type='submit' className="account-security-button about-button">Save Changes</button>
                    <button type='button' className="account-security-button about-button"
                            onClick={() => navigate('..') }>Back</button>
                </div>
            </form>
        </div>
        </div>
    )
}