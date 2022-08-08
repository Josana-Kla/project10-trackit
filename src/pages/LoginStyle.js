import styled from "styled-components";

const InitialContent = styled.div`
    background-color: #FFFFFF;

    height: 100vh;
`

const LoginContent = styled.div`
    padding-top: 68px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 33px;
    }

    a {
        color: #52B6FF;
        font-size: 14px;
        text-decoration: underline;
    }
`

const LoginForm = styled.form`
    margin-bottom: 25px;

    display: flex;
    flex-direction: column;
    gap: 6px;

    input {
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;

        padding-left: 11px;

        width: 303px;
        height: 45px;

        color: #666666;
        font-size: 20px;
    }

    input::placeholder {
        color: #DBDBDB;
    }

    button {
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;

        width: 303px;
        height: 45px;

        color: #FFFFFF;
        font-size: 21px;
    }
`

export { InitialContent, LoginContent, LoginForm }