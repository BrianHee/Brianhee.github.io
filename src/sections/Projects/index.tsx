import React, { useEffect } from 'react';
import PROJECTS from './constants';
import styles from './styles.module.scss';
import link from '../../assets/link.svg';
import githubw from '../../assets/githubw.svg';

const Projects: React.FunctionComponent = () => {
    const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(styles.open);
                    entry.target.classList.remove(styles.close);
					return;
				} else {
                    entry.target.classList.remove(styles.open);
                    entry.target.classList.add(styles.close);
                    return;
                }
			});
		},
		{ rootMargin: '-50% 0% -50% 0%' }
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
                            <h4>{'>'} {project.title}</h4>
                            <h4 className={styles.string}>"{project.description}"</h4>
                            <h4 className={styles.array}>[{project.stack.join(', ')}]</h4>
                            <div className={styles.links}>
                                <a href={project.href}><img src={link} alt='link' /> Demo</a>
                                <a href={project.github}><img src={githubw} alt='github' /> Source</a>
                            </div>
                            <h4>{'> '}<div className={styles.cursor}></div></h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Projects;