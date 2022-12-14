import { useContext, useEffect, useState } from "react"
import dayjs from "dayjs";
import 'dayjs/locale/pt-br' 

import { CardTodayHabit, ListTodayHabits, TodayTitle } from "./Style";
import Main from "../Main";

import ProgressDayContext from "../../contexts/ProgressDay";
import { getTodayHabits, markHabitDone, unmarkHabitDone } from "../../api/axios";

export default function TodayHabits() {
    const [ todayHabits, setTodayHabits ] = useState([]);
    const [ dones, setDones ] = useState([]);
    const { percentageDone, setPercentageDone } = useContext(ProgressDayContext);
    setPercentageDone(doPercentage(dones.length, todayHabits.length).toFixed(0));
    
    const currentWeekday = dayjs().locale('pt-br').format('dddd');
    const capitalizedWeekday = currentWeekday[0].toUpperCase() + currentWeekday.substring(1);
    const currentDate = dayjs().format('DD/MM');

    function doPercentage(habitsDone, total) {
        return (100 * habitsDone) / total;
    }

    useEffect(() => {
        getTodayHabits()
        .then((response) => {
            setTodayHabits(response.data);
            setDones(response.data.filter((habit) => habit.done));
        })
        .catch(() => console.log("error"));
    }, [todayHabits.done]);
    
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
        <Main>
            <TodayTitle>
                <h2>{capitalizedWeekday}, {currentDate}</h2>
                <p>{percentageDone > 0 ? (<span className="green-text">{percentageDone}% dos hábitos concluídos</span>) : "Nenhum hábito concluído ainda"}</p>
            </TodayTitle>

            <ListTodayHabits>
                {todayHabits.length > 0 ? (
                    <>
                        {todayHabits.map((todayHabit, index) => (
                            <CardTodayHabit key={index} >
                                <div>
                                    <h3>{todayHabit.name}</h3>
                                    <p>Sequência atual: {percentageDone > 0 ? (<span className="green-text">{todayHabit.currentSequence} dia(s)</span>) : `${todayHabit.currentSequence} dia(s)`}</p>
                                    <p className="initial-color">Seu recorde: {todayHabit.highestSequence} dia(s)</p>
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
                            </CardTodayHabit>
                        ))} 
                    </>
                ) : (
                    <div>Você não tem nenhum hábito para hoje</div>
                )}
            </ListTodayHabits>
        </Main>
    )
}