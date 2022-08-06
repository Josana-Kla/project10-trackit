import { listHabits } from "../../api/axios";
import { useEffect, useState } from "react";
import { createHabit, deleteHabit } from "../../api/axios";

import CreateHabits from "../../components/create-habits/CreateHabits";
import MyHabits from "../../components/my-habits/MyHabits";
import TodayHabits from "../today-habits/TodayHabits";

export default function Habits() {
    const [ createHabits, setCreateHabits ] = useState(false);
    const [ myHabits, setMyHabits ] = useState([]);

    useEffect(() => {
        listHabits()
        .then((response => setMyHabits(response.data)))
        .catch(() => console.log("error"));
    }, [])

    function includeHabit(body) {
        createHabit(body)
        .then((res) => {
            setMyHabits([...myHabits, res.data]);
            setCreateHabits(false);
        })
        .catch(() => console.log("error"));
    }

    function deleteHabitFromState(habitId) {
        deleteHabit(habitId)
        .then(() => {
            setMyHabits(myHabits.filter(habit => habit.id !== habitId)); 
        })
        .catch(() => console.log("error"));
    }

    return (
        <>
            <main>
                {/* se tem hábitos passar para o componente private main criados */ 1===2 ? <TodayHabits /* getTodayHabitsCreated={getTodayHabitsCreated}  *//> : (
                    <>
                        <div>
                            <h2>Meus hábitos</h2>
                            <button onClick={() => setCreateHabits(!createHabits)}>+</button>
                        </div>

                            <div>
                                {!createHabits || <CreateHabits setCreateHabits={setCreateHabits} includeHabit={includeHabit} />}
                            </div>

                        {myHabits.length === 0 ? (
                            <>
                                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                            </>
                        ) : (
                            <>
                                {myHabits.map((myHabit, index) => (
                                    <MyHabits key={index} myHabit={myHabit} deleteHabitFromState={deleteHabitFromState} />
                                ))}
                            </>
                        )}
                    </>
                ) }
            </main>
        </>
    )
}