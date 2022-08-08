import { HabitName, HabitsStyle, ListHabit, DayHabit, Trash } from "./Style";

export default function MyHabits( { myHabit, deleteHabitFromState } ) {
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ];

    function deleteHabit() {
        const confirmDelete = window.confirm("Tem certeza que você quer excluir este hábito?");
        if(confirmDelete) {
            deleteHabitFromState(myHabit.id);
        }
    } 

    return (
        <HabitsStyle>
            <HabitName>
                <h3>{myHabit.name}</h3>
                <ListHabit>
                    {weekDays.map((weekDay, index) => (
                        <DayHabit key={index} className={myHabit.days.indexOf(index) >= 0 ? "day-selected" : ""}>{weekDay}</DayHabit> 
                    ))}
                </ListHabit>
            </HabitName>
            <Trash onClick={deleteHabit}>
                <ion-icon name="trash-outline"></ion-icon>
            </Trash>
        </HabitsStyle> 
    )
}

