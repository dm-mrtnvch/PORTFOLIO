import React from 'react'
import styles from './Skills.module.css'
import stylesContainers from '../common/styles/Container.module.css'
import Skill from './skill/Skill';

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainers.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>skills</h2>
                <div className={styles.skills}>
                    <Skill title={'react'} description={'lo44423523423432rem lorem lorem lor24  62324 em lorem lorem '}/>
                    <Skill title={'js'} description={'lorem 2hh sfg sfh sfdsas df 893472 hjsdf sfg sfg s lorem lorem '}/>
                    <Skill title={'html/css'} description={'lorem 2347823758582904892374 l8888orem lorem lorem lorem '}/>
                </div>
            </div>
        </div>
    )
}

export default Skills