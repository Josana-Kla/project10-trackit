import styled from "styled-components";

const FooterStyle = styled.header`
    background-color: #FFFFFF;

    padding: 0 36px;

    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    bottom: 0;
    left: 0;

    a {
        color: #52B6FF;
        font-size: 18px;
    }

    div {
        position: fixed;
        left: calc((100vw - 91px) / 2);
        bottom: 10px;
    }
` 

export default FooterStyle;