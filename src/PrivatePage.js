import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext, AuthProvider } from "./contexts/Auth";

/* function renderError() {
    localStorage.clear("trackit");
    return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
} */

export default function PrivatePage( { children } ) {
    const { authenticated, loading } = useContext(AuthContext);
   

    /* const { user } = useContext(AuthContext); */

    /* const auth = JSON.parse(localStorage.getItem("trackit"));
   

   /*  if(loading) {
        return <div>Carregando...</div>;
    } */

    const userToken = JSON.parse(localStorage.getItem("trackit"));

    if (!authenticated && !userToken) {
        return <Navigate to="/" />;
    } else {
        return (
            <>
              {children}
            </>
          );
    }

  
}