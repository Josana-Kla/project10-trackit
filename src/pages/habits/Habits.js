import { useEffect, useState } from "react";
import { listHabits } from "../../api/axios";
import { createHabit, deleteHabit } from "../../api/axios";

import { MyHabitsListCreated, Title } from "./Style";
import Main from "../Main";

import CreateHabits from "../../components/create-habits/CreateHabits";
import TodayHabits from "../today-habits/TodayHabits";
import MyHabits from "../../components/my-habits/MyHabits";

export default function Habits() {
    const [ createHabits, setCreateHabits ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ myHabits, setMyHabits ] = useState([]);

    useEffect(() => {
        listHabits()
        .then((response => setMyHabits(response.data)))
        .catch(() => console.log("error"));
    }, [])

    function includeHabit(body) {
        setLoading(true);

        createHabit(body)
        .then((res) => {
            setMyHabits([...myHabits, res.data]);
            setCreateHabits(false);
            setLoading(false);
        })
        .catch((res) => {
            alert("error:" + res.data.message);
            setLoading(false);
        });
    }

    function deleteHabitFromState(habitId) {
        deleteHabit(habitId)
        .then(() => {
            setMyHabits(myHabits.filter(habit => habit.id !== habitId)); 
        })
        .catch(() => console.log("error"));
    }

    return (
        <Main>
            {myHabits.length < 0 ? <TodayHabits /> : (
                <MyHabitsListCreated>
                    <Title>
                        <h2>Meus hábitos</h2>
                        <button onClick={() => setCreateHabits(!createHabits)}>+</button>
                    </Title>
                
                    {!createHabits || <CreateHabits setCreateHabits={setCreateHabits} includeHabit={includeHabit} loading={loading} />}

                    {myHabits.length === 0 ? (
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    ) : (
                        <>
                            {myHabits.map((myHabit, index) => (
                                <MyHabits key={index} myHabit={myHabit} deleteHabitFromState={deleteHabitFromState} />
                            ))}
                        </>
                    )}
                </MyHabitsListCreated>
            ) }
        </Main>
    )
}