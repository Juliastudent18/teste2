import styles from "./Calendar.module.css"

const Calendar = ({title, content}) => {
    return(
        <div>
            <div className={styles.calendarTitle}>
                {title}
            </div>
            <div className={styles.calendarInfo}>
                {content}
            </div>
        </div>
    )
}

export default Calendar