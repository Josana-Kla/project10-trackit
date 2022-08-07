import { useState, createContext, /* useEffect */ } from "react";
import { useNavigate } from "react-router-dom";
/* import { BASE_URL, signIn } from "../api/axios"; */

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

    const login = (response) => {
        console.log("login auth", {});

        localStorage.setItem("trackit", JSON.stringify(response));
        
        navigate("/hoje");
    };

    /* const logout = () => {
        console.log("logout");
        localStorage.clear("trackit");

        navigate("/");
    }; */

    return(
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, setUser, login,  /*logout */ }}>
            {children}
        </AuthContext.Provider>
    )
}