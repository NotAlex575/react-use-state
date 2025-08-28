const Buttons = ({language}) => {
    const {title} = language;
    console.log(language)
    return(
        <button className="button">{title}</button>
    )
}

export default Buttons;