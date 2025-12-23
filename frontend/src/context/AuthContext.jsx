import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [role, setRole] = useState(() => localStorage.getItem("role"));

    const login = (jwtToken, userRole) => {
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("role", userRole);
        setToken(jwtToken);
        setRole(userRole);
    };

    const logout = () => {
        localStorage.clear();
        setToken(null);
        setRole(null);
    };

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        setRole(localStorage.getItem("role"));
    }, []);

    return (
        <AuthContext.Provider
            value={{
                token,
                role,
                isAuthenticated: !!token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
