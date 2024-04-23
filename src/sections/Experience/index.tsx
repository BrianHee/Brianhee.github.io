import React, { useEffect, useRef } from 'react';
import EXPERIENCE from './constants';
import styles from './styles.module.scss';

const Experience: React.FunctionComponent = () => {

    return (
        <div className={styles.container}>
            <h2>my experience</h2>
            <div className={styles.jobs}>
                {EXPERIENCE.map((job, idx) => (
                    <div className={styles['job-container']}>
                        <img src={job.logo} alt={job.company} />
                        <div className={styles['job-description']}>
                            <h3>{job.company}</h3>
                            <h4>{job.title}</h4>
                            <h4>{job.dates}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;