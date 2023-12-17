import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = (e) => {
        e.preventDefault();
    };
    const register = (e) => {
        e.preventDefault();
    };
    return (
        <div className="login">
            <img
                className="login__logo"
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9//Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
            />
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={signIn}
                        className="login__signInButton"
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    Sign in to securely access your account, customize your
                    experience, and enjoy personalized features. We respect your
                    privacy and use cookies to enhance your browsing experience.
                </p>
                <button onClick={register} className="login__registerButton">
                    Creat your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
