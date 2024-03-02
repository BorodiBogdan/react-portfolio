import { auth, provider } from '../firebase-confing';
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { useState } from 'react';

function Admin() {
    const stored_data = localStorage.getItem("isAuth");
    const [isAuth, setIsAuth] = useState(stored_data);

    //login to google
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                localStorage.setItem("isAuth", true);
                localStorage.setItem("name", auth.currentUser.displayName);
                setIsAuth(true);
            })
    }

    const signOutUser = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
        })
    }

    return (
        <div className="loginPage">
            <p>Sign in with Google to continue</p>
            {
                !isAuth ?
                    <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button> :
                    <button className="login-with-google-btn" onClick={signOutUser}>Log out</button>
            }
        </div>
    )
}

export default Admin;