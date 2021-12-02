import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            setCurrentUser(user);

        });
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};