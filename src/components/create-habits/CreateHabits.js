import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import Habits from "../../pages/habits/Habits";
import MyHabits from "../my-habits/MyHabits";

export default function CreateHabits() {
    const daysButton = [ "D", "S", "T", "Q", "Q", "S", "S", "D" ];
    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
        const promise = axios.post("criarumhabito", {
            name: "Nome do hábito",
            days: [1, 3, 5] // segunda, quarta e sexta
        });

        promise.catch();
        promise.then(
            navigate(<MyHabits />, {
                state: {
                    name: "Nome do hábito",
                    days: [1, 3, 5]
                }
            })
        );
    }

    return(
        <form onSubmit={handleForm}>
            <input type="text" placeholder="nome do hábito" />
            <div className="create-habit">
                {daysButton.map((dayButton, index) => (
                    <DayButton key={index} day={dayButton} />
                ))}
            </div>
            <span>
                <button onClick={() => <Habits />}>Cancelar</button>
                <button>Salvar</button>
            </span>
        </form>
    )
}

function DayButton( { day } ) {
    const [ selected, setSelected ] = useState(true);
    const [ color, setColor ] = useState("");
    const [ chosen, setChosen ] = useState([""]);

    function daySelected(dayC) {
        console.log(dayC);
        setSelected(!selected);
        if(selected === true) {
            setChosen(dayC);
            setColor("day-selected");
            console.log(chosen);
        } else {
            console.log("desselecionei");
            setColor("");
        }
        console.log(color);
        console.log(chosen);
    }

    
    return(
        <div className={color} onClick={() => daySelected(day)}>{day}</div>
    )
}