import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const auth = getAuth();
    const history = useHistory();
    const { currentUser } = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        signOut(auth)
            .then(() => {
                history.push('/');
            }).catch((error) => {
                alert(error);
            });
    }
    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <h1>Привет</h1>
            <p>Это панель мониторинга - если вы ее видите - значит вы авторизованы</p>
            <button onClick={handleClick}>Выход</button>
        </div>
    );
};

export default Dashboard;