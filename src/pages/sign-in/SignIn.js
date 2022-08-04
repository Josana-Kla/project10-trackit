import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn } from "../../src/api/axios";

export default function SignIn() {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    const navigate = useNavigate();
    
    function handleForm(event) {
        event.preventDefault();

        const body = {
            email: email,
            password: password
        }

        signIn(body)
        .then((res) => {
            console.log("sucesso");
            console.log(res.data);
            resetForm();
            navigate("/hoje");
            })
        .catch(() => alert("error"));
    }

    function resetForm() {
        setEmail("");
        setPassword("");
    }


    return (
        <>
            <div className="login flex-center">
                <img src="../../../assets/img/main-logo.svg" alt="main-logo" />
                <form onSubmit={handleForm}>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" pattern=".{8,}" title="Oito ou mais caracteres" required/>
                    <button>Entrar</button>
                </form>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </div>
        </>
    )
}
