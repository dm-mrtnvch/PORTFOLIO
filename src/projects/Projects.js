import React from 'react'
import styles from './Projects.module.css'
import stylesContainers from '../common/styles/Container.module.css'
import Project from './project/Project';


function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainers.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>my projects</h2>
                <div className={styles.projects}>
                    <Project title={'name of project raz'} description={`project's description raz`}/>
                    <Project title={'name of project dva'} description={`project's description dva`}/>
                    <Project title={'name of project dva'} description={`project's description dva`}/>
                    <Project title={'name of project dva'} description={`project's description dva`}/>
                    <Project title={'name of project dva'} description={`project's description dva`}/>
                    <Project title={'name of project dva'} description={`project's description dva`}/>
                </div>
            </div>
        </div>
    )
}


export default Projects
