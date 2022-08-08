import styled from "styled-components";

const TodayTitle = styled.div`
    h2 {
        color: #126BA5;
        font-size: 23px;

        margin-bottom: 5px;
    }

    p {
        color: #BABABA;
        font-size: 18px;

        margin-bottom: 28px;
    }
`

const ListTodayHabits = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
        color: #666666;
        font-size: 18px;
    }
`

const CardTodayHabit = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 94px;

    div h3 {
        color: #666666;
        font-size: 20px;

        margin-bottom: 8px;
    }

    div p {
        color: #666666;
        font-size: 13px;

        margin-bottom: 3px;
    }

    button {
        background-color: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;

        width: 69px;
        height: 69px;
    }

    button ion-icon {
        color: #FFFFFF;
        font-size: 45px;
    }

    button.greenSelect {
        background-color: #8FC549;
    }   
    
`


export { TodayTitle, ListTodayHabits, CardTodayHabit };