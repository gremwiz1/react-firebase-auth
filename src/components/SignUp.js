import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                setCurrentUser(true);
            }).catch((error) => {
                alert(error);
            })
    };
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <label for="email">Почта</label>
                <input type="email" name="email" placeholder="Почта" />
                <label for="password">Пароль</label>
                <input type="password" name="password" placeholder="Пароль" />
                <button type="submit">Сохранить</button>
            </form>
        </>
    );
};

export default SignUp;