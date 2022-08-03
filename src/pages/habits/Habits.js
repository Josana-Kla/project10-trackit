import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Habits() {
    return (
        <>
            <Header />
                <main>
                    <div>
                        <h2>Meus hábitos</h2>
                        <button>+</button>
                    </div>

                  {/*   <div>
                        <div>
                            <h3>Ler 1 capítulo de livro</h3>
                            <div>
                                <button>D</button>
                                <button>S</button>
                                <button>T</button>
                                <button>Q</button>
                                <button>Q</button>
                                <button>S</button>
                                <button>S</button>
                            </div>
                        </div>
                        <div>icone lixo</div>
                    </div> */}

                    <form>
                        <input type="text" placeholder="nome do hábito" />
                        <div>
                            <button>D</button>
                            <button>S</button>
                            <button>T</button>
                            <button>Q</button>
                            <button>Q</button>
                            <button>S</button>
                            <button>S</button>
                        </div>
                        <span>
                            <button>Cancelar</button>
                            <button>Salvar</button>
                        </span>
                    </form>

                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </main>
            <Footer />
        </>
    )
}