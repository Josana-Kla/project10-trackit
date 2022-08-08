import styled from "styled-components";

const MyHabitsListCreated = styled.p`
    p {
        color: #666666;
        font-size: 18px;
    }
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;

    h2 {
        color: #126BA5;
        font-size: 23px;
    }

    button {
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;

        width: 40px;
        height: 35px;

        color: #FFFFFF;
        font-size: 27px;
        font-weight: bold;
    }

`; 

export { MyHabitsListCreated, Title };