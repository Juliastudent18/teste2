import styles from "./ImportantLinks.module.css"

const ImportantLinks = ({link01, text01, link02, text02, link03, text03, link04, text04}) => {
    return(
        <div className={styles.importantContainer}>

            <p>Alguns links que achamos legal você ter:</p>

            <div className={styles.linkContainer}>

                <div className={styles.link}>
                    <a href={link01} target="_blank">Site oficial</a>
                </div>

                <div className={styles.link}>
                    <a href={link02} target="_blank">{text01}</a>
                </div>

                <div className={styles.link}>
                    <a href={link03} target="_blank">{text02}</a>
                </div>

                <div className={styles.link}>
                    <a href={link04} target="_blank">{text03}</a>
                </div>
            
            </div>

            <p className={styles.explication}>{text04}</p>
            
        </div>
    )
}

export default ImportantLinks;