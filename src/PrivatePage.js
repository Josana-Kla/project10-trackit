import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./contexts/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
/* 
const SEC = 1000;
const MIN_20 = SEC * 60 * 20; */

/* function renderError() {
    localStorage.clear("trackit");
    return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
  } */

export default function PrivatePage( { children } ) {
    /* const navigate = useNavigate(); */

    const { authenticated, loading } = useContext(AuthContext);

    /* const auth = JSON.parse(localStorage.getItem("trackit"));
    const now = +new Date();
    const timeLogged = auth.timestamp; */

    if(loading) {
        return <div>Carregando...</div>
    }

    if (!authenticated) {
        return <Link to="/" />;
    } else {
        return (
            <>
              <Header />
              {children}
              <Footer />
            </>
          );
    }

   /*  if (!auth) {
        return renderError();
    }
    

    if (now - timeLogged <= MIN_20) {
        return (
          <>
            <Header />
            {children}
            <Footer />
          </>
        );
      } else {
        //navigate("/");
        renderError();
      } */
}