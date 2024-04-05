import React, { createContext, useContext, useState } from "react"
const AuthData = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        familyName: "",
        givenName: "",
        birthday: ""
    });
    const setUserData = (newData) => {
        setUser(newData);
    }
    return (
        <>
            <AuthData.Provider value={{ user, setUserData }}>
                {children}
            </AuthData.Provider>
        </>
    );
};
const useData = () => {
    const data = useContext(AuthData);
    if (!data) {
        throw new Error("useData must be used within a ContextProvider");
    }
    return data;
}
export { useData, AuthProvider }
