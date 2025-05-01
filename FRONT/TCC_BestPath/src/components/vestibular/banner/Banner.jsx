import styles from "./Banner.module.css";

const Banner = ({src, text}) => {
    return(
        <>
            <div className={styles.container}>
                <img  src={src} className={styles.logo}></img>
                <h3 className={styles.text}>{text}</h3>
            </div>
        </>
    )
}

export default Banner;