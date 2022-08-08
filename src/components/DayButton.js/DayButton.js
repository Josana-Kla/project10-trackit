import { useState } from "react";

import { ButtonDay } from "./Style";

export default function DayButton( { day , idNumber, setWeekdayNumbers, weekdayNumbers, loading } ) {
    const [ color, setColor ] = useState("");
   
    //IMPORTANT: Nessa função, eu pego o elemento que cliquei, adiciono a cor, e depois crio um novo array contendo o id do elemento clicado, mas só se o id já não estiver dentro do array. Depois faço um filter para tirar os valores que ficam undefined quando eu desclico.
    
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
        <ButtonDay type="button" id={idNumber} className={color} onClick={() => daySelected(idNumber)} disabled={loading}>{day}</ButtonDay>
    )
}