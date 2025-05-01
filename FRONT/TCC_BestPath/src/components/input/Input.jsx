import style from "./Input.module.css"

const Input = ({className ,type, id, name, value, onChange, placeholder}) => {
    return(
        <input 
        className={className}
        type={type} 
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}/>
    )
}

export default Input