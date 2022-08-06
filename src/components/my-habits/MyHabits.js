import { useEffect } from "react";

export default function MyHabits( { myHabit, deleteHabitFromState  } ) {
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ];

    function deleteHabit() {
        deleteHabitFromState(myHabit.id);
    } 

    return (
        <div>
            <div>
                <h3>{myHabit.name}</h3>
                <div className="list-app">
                    {weekDays.map((weekDay, index) => (
                        <div className={myHabit.days.indexOf(index) >= 0 ? "day-selected" : ""} id={index}>{weekDay}</div> 
                    ))}
                </div>
            </div>
            <div onClick={deleteHabit}>icone lixo</div>
        </div> 
    )
}

