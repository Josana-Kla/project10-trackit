import ContentLogin from "../../components/ContentLogin";

export default function SignUp() {
    return (
        <>
            <div className="login flex-center">
                <img src="../../../assets/img/main-logo.svg" alt="main-logo" />
                <ContentLogin >
                    <>
                        <input type="text" placeholder="nome" />
                        <input type="image" placeholder="foto" alt="profile-photo" />
                        <button>Cadastrar</button>
                    </>
                    <a>Já tem uma conta? Faça login!</a>
                </ContentLogin>
            </div>
        </>
    )
}