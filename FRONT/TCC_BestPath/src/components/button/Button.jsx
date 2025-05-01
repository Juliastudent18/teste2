import style from "./Button.module.css"

const Button = ({type, onClick, className, text}) => {
    return(
        <button type={type} onClick={onClick} className={className}>{text}</button>
    )
}

export default Button