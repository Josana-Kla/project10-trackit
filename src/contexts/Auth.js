import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, signIn } from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ( { children } ) => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

   /*  useEffect(() => {
        const recoveredUser = localStorage.getItem("trackit");
        console.log(recoveredUser)

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser)); */
            /* BASE_URL.defaults.headers.Authorization = `Bearer ${token}`; */
     /*    } else {
            localStorage.clear("trackit");
        }

        setLoading(false);
    }, []); */

    const login = (body) => {
        const response = signIn(user);
        console.log(user);
        console.log(response.data);
        
        console.log("login auth", {body});

        /* const loggedUser = response.data.name;
        const loggedUserToken = response.data.token;
        console.log(loggedUserToken);

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", loggedUserToken);

        BASE_URL.defaults.headers.Authorization = `Bearer ${loggedUserToken}`;
    
        setUser(loggedUser); */
        navigate("/hoje");
    };

    

    /* const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        BASE_URL.defaults.headers.Authorization = null;

        setUser(null);
        navigate("/");
    }; */

    return(
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, setUser, login,  /*logout */ }}>
            {children}
        </AuthContext.Provider>
    )
}