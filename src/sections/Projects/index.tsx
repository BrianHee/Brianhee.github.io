import React, { useEffect } from 'react';
import PROJECTS from './constants';
import styles from './styles.module.scss';

const Projects: React.FunctionComponent = () => {
    const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.toggle(styles.open);
                    entry.target.classList.toggle(styles.close);
					return;
				} else {
                    entry.target.classList.toggle(styles.open);
                    entry.target.classList.toggle(styles.close);
                    return;
                }
			});
		},
		{ rootMargin: '-40% 0% -40% 0%' }
	);


	useEffect(() => {
		for (let i = 0; i < PROJECTS.length; i++) {
            observer.observe(document.getElementById(`project-${i}`)!);
        }
    }, []);

    return <div className={styles.container}>
        <h2>my projects</h2>
        <div className={styles.wrapper}>
            {PROJECTS.map((project, idx) => (
                <div className={styles['project-wrapper']}>
                    <a href={project.href} key={idx}>
                        <img src={project.logo} alt={project.title}/>
                    </a>
                    <div className={styles.terminal} id={`project-${idx}`}>
                        <div className={styles['terminal-tab']}>
                            <div className={styles.red}></div>
                            <div className={styles.yellow}></div>
                            <div className={styles.green}></div>
                        </div>
                        <div className={styles['terminal-window']}>
                            {'>'} {project.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Projects;