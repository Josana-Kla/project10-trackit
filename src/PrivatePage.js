import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./contexts/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";


function renderError() {
    localStorage.clear("trackit");
    return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
  }

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
      console.log("autheticated")
        return (
            <>
              <Header />
              {children}
              <Footer />
            </>
          );
    }

  
}