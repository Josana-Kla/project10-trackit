import { useState } from "react";
import { ThreeDots } from  'react-loader-spinner';

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
        <form className={hidden} onSubmit={handleForm}>
            <input type="text" value={habitName} onChange={e => setHabitName(e.target.value)}  placeholder="nome do hábito" disabled={loading} />
            <div className="create-habit">
                {daysButton.map((dayButton, index) => (
                    <DayButton key={index} idNumber={index} day={dayButton} setWeekdayNumbers={setWeekdayNumbers} weekdayNumbers={weekdayNumbers} loading={loading} />
                ))}
            </div>
            <span>
                <button onClick={hideForm} disabled={loading}>Cancelar</button>
                {loading ? (
                    <button disabled={loading} >
                        <ThreeDots color="#FFFFFF" height={80} width={80} />
                    </button>
                ) : (
                    <button type="submit">Salvar</button>
                )}
            </span>
        </form>
    )
}

function DayButton( { day , idNumber, setWeekdayNumbers, weekdayNumbers, loading } ) {
    const [ color, setColor ] = useState("");
   
    //IMPORTANT: Nessa função, eu pego o elemento que cliquei, adiciono a cor, e depois crio um novo array contendo o id do elemento clicado, mas só se o id já não estiver dentro do array. Depois faço um filter para tirar os valores que ficam undefined quando eu desclico.
    // TODO: Acrescentar um sort no array weekdayNumbers 
    function daySelected(idChosen) {
        if(color === "") {
            setColor("day-selected");
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
        <button type="button" id={idNumber} className={color} onClick={() => daySelected(idNumber)} disabled={loading}>{day}</button>
    )
}