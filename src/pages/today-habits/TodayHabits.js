import { useContext, useEffect, useState } from "react"
import ProgressDayContext from "../../contexts/ProgressDay";
import { getTodayHabits, markHabitDone, unmarkHabitDone } from "../../api/axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br' 

export default function TodayHabits() {
    const [ todayHabits, setTodayHabits ] = useState([]);
    const { progressTodayHabits, setProgressTodayHabits } = useContext(ProgressDayContext);
  /*   const habitsDone = todayHabits.filter((habit) => habit.done);
    const habitsPercentage = doPercentage(habitsDone.length, todayHabits.length); */
    const [ iconColor, setIconColor ] = useState("");
    
    const currentWeekday = dayjs().locale('pt-br').format('dddd');
    const capitalizedWeekday = currentWeekday[0].toUpperCase() + currentWeekday.substring(1);
    const currentDate = dayjs().format('DD/MM');

    function doPercentage(habitsDone, total) {
        return (100 * habitsDone) / total;
    }

    useEffect(() => {
        getTodayHabits()
        .then((response) => {
            setTodayHabits(response.data)
        })
        .catch(() => console.log("error"));
    }, [todayHabits.done]);
    
   /*  function checkButton(datasHabitSelected, habitId, isDone) {
        console.log(isDone);

        {iconColor === "" ? setIconColor("greenSelect") : setIconColor("")}

        {!isDone ? markHabitAsDone(habitId) : unmarkHabitAsDone(habitId)}
    } */

    function markHabitAsDone(habitId) {
        markHabitDone(habitId)
        .then(() => {
            setTodayHabits(...todayHabits);
            console.log("sucesso marcar");
        })
        .catch(() => console.log("error"));
    }

    function unmarkHabitAsDone(habitId) {
        unmarkHabitDone(habitId)
        .then(() => {
            setTodayHabits(...todayHabits);
            console.log("sucesso desmarcar");
        })
        .catch(() => console.log("error"));
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
                                {todayHabit.done ? (
                                    <button className="greenSelect" onClick={() => unmarkHabitAsDone(todayHabit.id)}>
                                        <ion-icon name="checkmark-outline"></ion-icon>
                                    </button>
                                ) : (
                                    <button className="" onClick={() => markHabitAsDone(todayHabit.id)}>
                                        <ion-icon name="checkmark-outline"></ion-icon>
                                    </button>
                                )}
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