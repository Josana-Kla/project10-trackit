import styled from "styled-components";

const HabitsStyle = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;

    height: 90px;

    display: flex;
    justify-content: space-between;
`

const HabitName = styled.div`
    padding: 15px 14px;

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    color: #666666;
    font-size: 20px;
` 

const ListHabit = styled.div`
    display: flex;
    gap: 5px;
`

const DayHabit = styled.button`
    background-color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #CFCFCF;

    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #DBDBDB;
    font-size: 20px;
`

const Trash = styled.div`
    padding: 15px;
   
    ion-icon {
        width: 18px;
        height: 20px;

        color: #666666;
    }
`

export { HabitsStyle, HabitName, ListHabit, DayHabit, Trash };