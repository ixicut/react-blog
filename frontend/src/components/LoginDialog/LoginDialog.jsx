import { useState } from "react";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const LoginModal = (props) => {
    const history = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    function onLogin(event) {
        event.preventDefault();
        if (login === "admin" && password === "admin") {
            localStorage.setItem('isLoggedIn', true);
            history('/');
        } else {
            alert('LOGIN OR PASSWORD IS WRONG!');
        }
    }

    return (
        <>
            <div class="wrapper background">
                <div className="container d-flex justify-content-center align-items-center vh-100">
                    <form onSubmit={onLogin} className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="login" className="sr-only">
                            Login
                        </label>
                        <input
                            type="text"
                            id="login"
                            className="form-control"
                            placeholder="Enter login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                            autoFocus
                        />
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-lg btn-primary btn-block">
                            OK
                        </button>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}

export default LoginModal;