
export default function MyHabits( { myHabit, deleteHabitFromState } ) {
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ];

    function deleteHabit() {
        const confirmDelete = window.confirm("Tem certeza que você quer excluir este hábito?");
        if(confirmDelete) {
            deleteHabitFromState(myHabit.id);
        }
    } 

    return (
        <div>
            <div>
                <h3>{myHabit.name}</h3>
                <div className="list-app">
                    {weekDays.map((weekDay, index) => (
                        <div key={index} className={myHabit.days.indexOf(index) >= 0 ? "day-selected" : ""}>{weekDay}</div> 
                    ))}
                </div>
            </div>
            <div onClick={deleteHabit}>
                <ion-icon name="trash-outline"></ion-icon>
            </div>
        </div> 
    )
}

