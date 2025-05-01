import styles from "./Favorite.module.css";

const Favorite = ({title}) => {
    return(
        <div className={styles.vestibular}>
            💙 {title}
        </div>
    )
}

export default Favorite