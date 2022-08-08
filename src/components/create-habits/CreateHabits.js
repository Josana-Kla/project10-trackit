import { useState } from "react";
import { ThreeDots } from  'react-loader-spinner';

import { ActionButtons, HabitsCreation, WeekdaysStyle } from "./Style";

import DayButton from "../DayButton.js/DayButton";

export default function CreateHabits( { setCreateHabits, includeHabit, loading } ) {
    const daysButton = [ "D", "S", "T", "Q", "Q", "S", "S" ];
    const [ weekdayNumbers, setWeekdayNumbers ] = useState([]);
   
    const [ habitName, setHabitName ] = useState('');
    const [ hidden, setHidden ] = useState("");

    function handleForm(event) {
        event.preventDefault();

        weekdayNumbers.sort();
        
        const body = {
            name: habitName,
            days: weekdayNumbers 
        };

        if(habitName.length > 0 && weekdayNumbers.length > 0) {
            console.log(body);
            includeHabit(body);
        } 

    }

    function hideForm() {
        if(hidden === "") {
            setHidden("hidden");
            setCreateHabits(false);
        } else {
            setHidden("");
        }
    }

    return(
        <HabitsCreation className={hidden} onSubmit={handleForm}>
            <input type="text" value={habitName} onChange={e => setHabitName(e.target.value)}  placeholder="nome do hábito" disabled={loading} />
            <WeekdaysStyle className="create-habit">
                {daysButton.map((dayButton, index) => (
                    <DayButton key={index} idNumber={index} day={dayButton} setWeekdayNumbers={setWeekdayNumbers} weekdayNumbers={weekdayNumbers} loading={loading} />
                ))}
            </WeekdaysStyle>
            <ActionButtons>
                <button onClick={hideForm} disabled={loading}>Cancelar</button>
                {loading ? (
                    <button disabled={loading} >
                        <ThreeDots color="#FFFFFF" height={80} width={80} />
                    </button>
                ) : (
                    <button type="submit">Salvar</button>
                )}
            </ActionButtons>
        </HabitsCreation>
    )
}

