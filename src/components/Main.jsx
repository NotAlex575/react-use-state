import { useState } from "react"
import languages from "../../scripts/languages"
import Buttons from "./buttons"

const Main = () => {
    const[activeLanguage,  setActiveLanguage] = useState(languages[0])
    return(
        <main>
            <div className="container">
                <div className="container-button">
                    {languages.map((language) => {
                       return <Buttons key= {language.id} language={language} onClick={() => setActiveLanguage(language)}></Buttons>
                    })}
                </div>
                <div className="container-description">
                    <h2>{activeLanguage.title}</h2>
                    <p>{activeLanguage.description}</p>
                </div>
            </div>
        </main>
    )
} 

export default Main;