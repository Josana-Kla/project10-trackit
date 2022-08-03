import { useState } from "react";


import CreateHabits from "../../components/create-habits/CreateHabits";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TodayHabits from "../today-habits/TodayHabits";

export default function Habits() {
    const [ createHabits, setCreateHabits ] = useState(false);

    return (
        <>
            <Header />
                <main>
                    {/* se tem hábitos passar para o componente private main criados */ 1===2 ? <TodayHabits /> : (
                        <>
                            <div>
                                <h2>Meus hábitos</h2>
                                <button onClick={() => setCreateHabits(!createHabits)}>+</button>
                            </div>

                            <div>
                                {createHabits ? <CreateHabits /> : <span>nada</span>}
                            </div>

                            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                        </>
                    ) }
                </main>
            <Footer />
        </>
    )
}