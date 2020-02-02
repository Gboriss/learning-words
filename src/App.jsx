import React from 'react';

function App() {
    return (
        <main>
            <header>
                <div className="bigCards">
                    <h2>cat</h2>
                </div>
                <div className="buttonCards">
                <div className="buttonLanguage">
                    <button>en</button>
                    <button>ru</button>
                </div>
                    <button>+10</button>
                    <button>ok</button>
                </div>
                <form className="todo-form">
                    <input type="text" placeholder="New word" />
                    <input type="text" placeholder="Перевод" />
                    <button type="submit">Добавить</button>
                </form>
            </header>

            <section>
                <div className="hiddenCards cards">10</div>
                <div className="answerCards">
                    <div className="plusCard cards">
                        <h2>+7</h2>
                    </div>
                    <div className="minusCards cards">
                        <h2>-3</h2>
                    </div>
                </div>
            </section>
            <footer>
                <tbody>
                    <tr>
                        <td className="cards">Ячейка 1</td>
                        <td className="cards">Ячейка 2</td> 
                        <td className="cards">Ячейка 3</td>
                        <td className="cards">Ячейка 4</td> 
                        <td className="cards">Ячейка 5</td>
                        <td className="cards">Ячейка 6</td> 
                        <td className="cards">Ячейка 7</td>
                        <td className="cards">Ячейка 8</td> 
                        <td className="cards">Ячейка 9</td>
                        <td className="cards">Ячейка 10</td> 
                    </tr> 
            </tbody>
            </footer>
        </main>
    )
}

export default App