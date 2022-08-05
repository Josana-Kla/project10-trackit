import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signUp } from "../../api/axios";

export default function SignUp() {
    const [ email, setEmail ] = useState();
    const [ name, setName ] = useState();
    const [ image, setImage ] = useState();
    const [ password, setPassword ] = useState();

    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();

        const body = {
            email: email,
            name: name,
            image: image,
            password: password
        }

        signUp(body)
        .then((res) => {
            console.log("sucesso");
            console.log(res.data);
            resetForm();
            navigate("/");
            })
        .catch(() => alert("error"));
    }

    function resetForm() {
        setEmail("");
        setName("");
        setImage("");
        setPassword("");
    }

    return (
        <>
            <div className="login flex-center">
                <img src="../../../assets/img/main-logo.svg" alt="main-logo" />
                <form onSubmit={handleForm}>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" pattern=".{8,}" title="Oito ou mais caracteres" required/>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="nome" pattern=".{2,}" title="Dois ou mais caracteres" required/>
                    <input type="url" value={image} onChange={e => setImage(e.target.value)} placeholder="foto" alt="profile-photo" pattern="https?://.+" title="Include http://" required />
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/">Já tem uma conta? Faça login!</Link>
            </div>
        </>
    )
}