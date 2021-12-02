import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <h1>Домашняя страница</h1>
            {currentUser ? (
                <p>
                    Вы авторизованы - <Link to="/dashboard">Панель мониторинга</Link>
                </p>
            ) : (
                <p>
                    <Link to="/login">Войти</Link> or <Link to="/signup">Зарегистрироваться</Link>
                </p>
            )}
        </>
    );
};

export default Home;