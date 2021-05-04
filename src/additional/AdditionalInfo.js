import React from 'react'
import styles from './AdditionalInfo.module.css'
import stylesContainers from '../common/styles/Container.module.css'

function AdditionalInfo() {
    return (
        <div className={styles.additionalInfoBlock}>
            <div className={`${stylesContainers.container} ${styles.additionalInfoContainer}`}>
                <h3>I will consider options for remote work</h3>
                <div className={styles.additionalInfoButton}>
                    <button>hire me</button>
                </div>
            </div>

        </div>
    )
}

export default AdditionalInfo