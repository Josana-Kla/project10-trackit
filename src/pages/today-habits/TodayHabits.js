import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function TodayHabits() {
    return (
        <>
            <Header />
            
            <main>
                <div>
                    <h2>Segunda, 17/05</h2>
                    <p>Nenhum hábito concluído ainda</p>
                </div>

                <div>
                    <div>
                        <div>
                            <h3>Ler 1 capítulo de livro</h3>
                            <p>Sequência atual: 3 dias</p>
                            <p>Seu recorde: 5 dias</p>
                        </div>
                        <button>Check</button>
                    </div>
                    <div>
                        <div>
                            <h3>Ler 1 capítulo de livro</h3>
                            <p>Sequência atual: 3 dias</p>
                            <p>Seu recorde: 5 dias</p>
                        </div>
                        <button>Check</button>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}