import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { createHabit } from "../../api/axios";

import Habits from "../../pages/habits/Habits";
import MyHabits from "../my-habits/MyHabits";

export default function CreateHabits() {
    const daysButton = [ "D", "S", "T", "Q", "Q", "S", "S", "D" ];
    const [ weekdayNumbers, setWeekdayNumbers ] = useState([]);
    const [ habitName, setHabitName ] = useState('');
    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();

        const body = {
            name: habitName,
            days: weekdayNumbers 
        };

        createHabit(body)
        .then(() => /* navigate(<MyHabits />) */ console.log("sucesso"))
        .catch(() => console.log("error"));

    }

    return(
        <form onSubmit={handleForm}>
            <input type="text" value={habitName} onChange={e => setHabitName(e.target.value)}  placeholder="nome do hábito" required />
            <div className="create-habit">
                {daysButton.map((dayButton, index) => (
                    <DayButton key={index} idNumber={index} day={dayButton} setWeekdayNumbers={setWeekdayNumbers} weekdayNumbers={weekdayNumbers} />
                ))}
            </div>
            <span>
                <button onClick={() => <Habits />}>Cancelar</button>
                <button>Salvar</button>
            </span>
        </form>
    )
}

function DayButton( { day , idNumber, setWeekdayNumbers, weekdayNumbers } ) {
    const [ color, setColor ] = useState("");
   
    //TODO: pegar só os elementos/id que tem o "day-selected"
    function daySelected(idChosen) {
     
        if(color === "") {
            setColor("day-selected");
        } else {
            setColor("");
        }

        if(weekdayNumbers.indexOf(idChosen) >= 0) {
            return weekdayNumbers;
        } else {
            setWeekdayNumbers([...weekdayNumbers, idChosen]);
            console.log(weekdayNumbers)
            console.log(color)
        }

    }
    
    return(
        <div id={idNumber} className={color} onClick={() => daySelected(idNumber)}>{day}</div>
    )
}