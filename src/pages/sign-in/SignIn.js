import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner';

import { signIn } from "../../api/axios";
import { AuthContext } from "../../contexts/Auth";
import UserDatas from "../../contexts/UserDatas";

export default function SignIn() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const { authenticated, setUser, login } = useContext(AuthContext);
    const { userDatas, setUserDatas } = useContext(UserDatas);

  
    function handleForm(event) {
        event.preventDefault();

        const body = {
            email: email,
            password: password
        }

        setLoading(true);

        signIn(body)
        .then((res) => {
            setUserDatas(res.data);
            login(res.data);
            
            console.log("sucesso");
            console.log(res.data);
            })
        .catch(() => {
            alert("error");
            setLoading(false);
            resetForm();
        });
    }

    function resetForm() {
        setEmail("");
        setPassword("");
    }


    return (
        <>
            <div className="login flex-center">
                <img src="../../../assets/img/main-logo.svg" alt="main-logo" />
                <p>{String(authenticated)}</p>
                <form onSubmit={handleForm}>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required disabled={loading} />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" pattern=".{8,}" title="Oito ou mais caracteres" required disabled={loading} />
                    {loading ? (
                        <button type="submit" disabled={loading} >
                            <ThreeDots color="#FFFFFF" height={80} width={80} />
                        </button>
                    ) : (
                        <button type="submit">Entrar</button>
                    )}
                </form>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </div>
        </>
    )
}
