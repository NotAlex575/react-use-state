const Buttons = ({language, onClick}) => {
    const {title} = language;
    console.log(language)
    return(
        <button className="button" onClick={onClick}>
            {title}
        </button>
    )
}


export default Buttons;