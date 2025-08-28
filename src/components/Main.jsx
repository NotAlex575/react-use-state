import languages from "../../scripts/languages"
import Buttons from "./buttons"

const Main = () => {
    return(
        <main>
            <div className="container">
                <div className="container-button">
                    {languages.map((language) => {
                       return <Buttons key= {language.id} language={language}></Buttons>
                    })}
                </div>
                <div className="container-description">
                    <h2>Nome linguaggio</h2>
                    <p>Descrizione</p>
                </div>
            </div>
        </main>
    )
} 

export default Main;