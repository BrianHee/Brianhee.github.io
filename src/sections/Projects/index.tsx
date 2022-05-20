import React from 'react';
import PROJECTS from './constants';
import styles from './styles.module.scss';

const Projects: React.FunctionComponent = () => {
    return <div className={styles.container}>
        <h2>my projects</h2>
        <div className={styles.wrapper}>
            {PROJECTS.map((project, idx) => (
                <a href={project.href}>
                    <img src={project.logo} alt={project.title}/>
                </a>
            ))}
        </div>
    </div>
}

export default Projects;