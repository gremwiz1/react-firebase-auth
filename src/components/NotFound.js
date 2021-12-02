import React from "react";
import { Link, useHistory } from "react-router-dom";

function NotFound() {
    const history = useHistory();
    function handleClickLink() {
        history.goBack();
    }
    return (
        <section >
            <h1 >404</h1>
            <p >Страница не найдена</p>
            <Link to="" onClick={handleClickLink} >Назад</Link>
        </section>
    )
};
export default NotFound;