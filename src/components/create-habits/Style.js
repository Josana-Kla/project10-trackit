import styled from "styled-components";

const HabitsCreation = styled.form`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px 18px 15px 18px;
    margin-bottom: 29px;

    width: 100%;
    height: 180px;

    input {
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        padding-left: 11px;
        margin-bottom: 10px;

        width: 100%;
        height: 45px;

        color: #666666;
        font-size: 20px;
    }

    input::placeholder {
        color: #DBDBDB;
    }

`

const WeekdaysStyle = styled.div`
    margin-bottom: 29px;

    display: flex;
    gap: 5px;
` 

const ActionButtons = styled.span`
    display: flex;
    justify-content: end;
    gap: 23px;

    height: 35px;

    button:nth-child(1) {
        background-color: #FFFFFF;
        border: none;

        color: #52B6FF;
        font-size: 16px;
    }

    button:nth-child(2) {
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;

        width: 84px;

        color: #FFFFFF;
        font-size: 16px;
    }
` 

export { HabitsCreation, WeekdaysStyle, ActionButtons };