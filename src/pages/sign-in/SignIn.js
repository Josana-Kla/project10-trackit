import ContentLogin from "../../components/ContentLogin";

export default function SignIn() {
    return (
        <>
            <div className="login flex-center">
                <img src="../../../assets/img/main-logo.svg" alt="main-logo" />
                <ContentLogin >
                    <>
                        <button>Entrar</button>
                    </>
                    <a>Não tem uma conta? Cadastre-se!</a>
                </ContentLogin>
            </div>
        </>
    )
}
