import React from 'react'
import stylesContainers from '../common/styles/Container.module.css'
import styles from './Footer.module.css'

function Footer(){
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainers.container} ${styles.footerContainer}`}>
                <span>dmitry dmitry</span>
                <div>fixed px</div>
                <span>all rights reserved</span>
            </div>
        </div>
    )
}

export default Footer