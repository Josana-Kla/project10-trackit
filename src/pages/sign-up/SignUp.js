import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner';

import { signUp } from "../../api/axios";

export default function SignUp() {
    const [ email, setEmail ] = useState("");
    const [ name, setName ] = useState("");
    const [ image, setImage ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();

        const body = {
            email: email,
            name: name,
            image: image,
            password: password
        }

        setLoading(true);

        signUp(body)
        .then((res) => {
            console.log("sucesso");
            console.log(res.data);
            resetForm();
            navigate("/");
            })
        .catch(() => {
            alert("error");
            setLoading(false);
            resetForm();
        });
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
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required disabled={loading} />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" pattern=".{8,}" title="Oito ou mais caracteres" required disabled={loading} />
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="nome" pattern=".{2,}" title="Dois ou mais caracteres" required disabled={loading} />
                    <input type="url" value={image} onChange={e => setImage(e.target.value)} placeholder="foto" alt="profile-photo" pattern="https?://.+" title="Include http://" required disabled={loading} />
                    {loading ? (
                        <button type="submit" disabled={loading} >
                            <ThreeDots color="#FFFFFF" height={80} width={80} />
                        </button>
                    ) : (
                        <button type="submit">Cadastrar</button>
                    )}
                </form>
                <Link to="/">Já tem uma conta? Faça login!</Link>
            </div>
        </>
    )
}