import React, {useState} from 'react';
import '../style/Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(e => {
                alert(e.message);
            });
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth)=> {
                history.push('/');
            })
            .catch(e=> {
                alert(e.message)
            });
        };

    return <div className="login">
        <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                 alt="Amazon logo" className="login-logo"/>
        </Link>
        <div className="login-container">
            <h1>Sign-In</h1>
            <form className="login-form">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={login}>Sign in</button>
            </form>

            <p><small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small></p>

            <h5>New to Amazon?</h5>

            <button onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
}

export default Login;
