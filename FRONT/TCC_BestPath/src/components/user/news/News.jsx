import styles from "./News.module.css"

const News = ({title, content}) => {
    return(
        <div>
            <div className={styles.newsTitle}>
                {title}
            </div>
            <div className={styles.newsInfo}>
                {content}
            </div>
        </div>
    )
}

export default News