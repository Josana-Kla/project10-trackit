import styled from "styled-components";

const HeaderStyle = styled.header`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

    padding: 0 18px;

    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;

    img:nth-child(2) {
        width: 51px;
        height: 51px;

        border-radius: 50%;
    }

` 

export default HeaderStyle;