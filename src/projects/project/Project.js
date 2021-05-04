import React from 'react'
import styles from './Project.module.css'

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.imageBlock}>
                <img src="https://cdn.nextgov.com/media/img/cd/2020/10/19/NGspace20201019/860x394.jpg?1618395239" alt="space"/>
                <button className={styles.projectButton}>look</button>
            </div>
            <div className={styles.descriptionBlock}>
                <div>{props.title}</div>
                <div>{props.description}</div>
            </div>
        </div>
    )
}

export default Project