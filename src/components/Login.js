import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                alert(error);
            })
    };
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <>
            <h1>Вход</h1>
            <form onSubmit={handleSubmit}>
                <label for="email">Почта</label>
                <input type="email" name="email" placeholder="Почта" />
                <label for="password">Пароль</label>
                <input type="password" name="password" placeholder="Пароль" />
                <button type="submit">Войти</button>
            </form>
        </>
    );
};

export default Login;