import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, signIn } from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ( { children } ) => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if(recoveredUser && token) {
            setUser(JSON.parse(recoveredUser));
            BASE_URL.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setLoading(false);
    }, [])

    const login = (body) => {
        const response = signIn(body)
        
        console.log("login auth", response.data);

        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        BASE_URL.defaults.headers.Authorization = `Bearer ${token}`;

    
        setUser(loggedUser);
        navigate("/hoje");
    
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        BASE_URL.defaults.headers.Authorization = null;

        setUser(null);
        navigate("/");
    };

    return(
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}