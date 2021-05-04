import React from 'react'
import styles from './Contacts.module.css'
import stylesContainers from '../common/styles/Container.module.css'

function Contacts(){
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainers.container} ${styles.contactsContainer}`}>
                Contacts
                <div className={styles.textContainer}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"/>
                </div>
                <button>send</button>
            </div>
        </div>
    )
}

export default Contacts