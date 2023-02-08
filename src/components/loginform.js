import React, {useEffect, useState} from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import "./loginform.css"

const LoginForm = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "1047806050679-188oo9ivv9t7k8n814m66m4fd73rv6u5.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google">
                    <GoogleLogin className="blue"
                        clientId="1047806050679-188oo9ivv9t7k8n814m66m4fd73rv6u5.apps.googleusercontent.com"
                        buttonText=""
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false} 
                        icon={false}    
                        theme="dark"  
                    />
                </div>
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
            
        </div>
    )
}

export default LoginForm