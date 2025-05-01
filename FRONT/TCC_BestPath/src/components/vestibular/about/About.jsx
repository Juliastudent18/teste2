import styles from "./About.module.css";

const About = ({content, type, onClick}) => {
    return(
        <div className={styles.aboutContainer}>
            <p>Mas afinal... o que é esse vestibular?</p>

            <div className={styles.contentDiv}>
                <p>{content}</p>
            </div>

            <div type={type} onClick={onClick} className={styles.favorite}>
                <button>💙 Gostei, quero um atalho no meu perfil!</button>
            
                <button>⭐ Amei, quero receber as atualizações!</button> 
            </div>            

        </div>
    )
}

export default About;