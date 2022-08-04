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

        if(habitName.length > 0 && weekdayNumbers.length > 0) {
            createHabit(body)
            .then(() => /* navigate(<MyHabits />) */ console.log("sucesso"))
            .catch(() => console.log("error"));
        } 

    }

    return(
        <form onSubmit={handleForm}>
            <input type="text" value={habitName} onChange={e => setHabitName(e.target.value)}  placeholder="nome do hábito" />
            <div className="create-habit">
                {daysButton.map((dayButton, index) => (
                    <DayButton key={index} idNumber={index} day={dayButton} setWeekdayNumbers={setWeekdayNumbers} weekdayNumbers={weekdayNumbers} />
                ))}
            </div>
            <span>
                <button onClick={() => navigate(<Habits />)}>Cancelar</button>
                <button>Salvar</button>
            </span>
        </form>
    )
}

function DayButton( { day , idNumber, setWeekdayNumbers, weekdayNumbers } ) {
    const [ color, setColor ] = useState("");
   
    //IMPORTANT: Nessa função, eu pego o elemento que cliquei, adiciono a cor, e depois crio um novo array contendo o id do elemento clicado, mas só se o id já não estiver dentro do array. Depois faço um filter para tirar os valores que ficam undefined quando eu desclico.
    // TODO: Acrescentar um sort no array weekdayNumbers 
    function daySelected(idChosen) {
        if(color === "") {
            setColor("day-selected")
        } else {
            setColor("");
        }

        if(weekdayNumbers.indexOf(idChosen) !== -1) {
            const newDays = weekdayNumbers.map(day => {
                if(day !== idChosen) {
                    return day;
                }
            });
            setWeekdayNumbers(newDays.filter(day=> day !== undefined));
        } else {
            setWeekdayNumbers([...weekdayNumbers, idChosen]);
        }
    }
    
    return(
        <div id={idNumber} className={color} onClick={() => daySelected(idNumber)}>{day}</div>
    )
}