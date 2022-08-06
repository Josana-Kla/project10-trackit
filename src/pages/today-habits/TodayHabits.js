import { useContext, useEffect, useState } from "react"
import ProgressDayContext from "../../contexts/ProgressDay";
import { getTodayHabits, markHabitDone } from "../../api/axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br' 

export default function TodayHabits() {
    const [ todayHabits, setTodayHabits ] = useState([]);
    
    const currentWeekday = dayjs().locale('pt-br').format('dddd');
    const capitalizedWeekday = currentWeekday[0].toUpperCase() + currentWeekday.substring(1);
    const currentDate = dayjs().format('DD/MM');

    useEffect(() => {
        getTodayHabits()
        .then((response) => {
            console.log(response.data)
            setTodayHabits(response.data)
        })
        .catch(() => console.log("error"));
    }, []);
    
    function markHabitAsDoneOrNot(habitId) {
        

        markHabitDone(habitId)
        .then()
        .catch()
    }

    return (
        <>
            <div>
                <h2>{capitalizedWeekday}, {currentDate}</h2>
                <p>Nenhum hábito concluído ainda</p>
            </div>

            <div className="list-today-habits">
                {todayHabits.length > 0 ? (
                    <>
                        {todayHabits.map((todayHabit, index) => (
                            <div key={index} >
                                <div>
                                    <h3>{todayHabit.name}</h3>
                                    <p>Sequência atual: {todayHabit.currentSequence} dia(s)</p>
                                    <p>Seu recorde: {todayHabit.highestSequence} dia(s)</p>
                                </div>
                                <button onClick={markHabitAsDoneOrNot}>
                                    <ion-icon name="trash-outline"></ion-icon>
                                </button>
                            </div>
                        ))} 
                    </>
                ) : (
                    <div>Você não tem nenhum hábito para hoje</div>
                )}
            </div>
        </>
    )
}