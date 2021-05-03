import React from 'react'
import styles from './Main.module.css'
import stylesContainer from './../common/styles/Container.module.css'

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>Dmitry Martynovich</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto assumenda deleniti dicta
                        distinctio dolor earum ex illo, laboriosam libero minima nam praesentium repudiandae sequi, sint
                        temporibus totam ullam voluptatibus</p>
                </div>
                <div className={styles.photo}>

                </div>
            </div>
        </div>
    )
}

export default Main