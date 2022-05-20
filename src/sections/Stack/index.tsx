import React from 'react';
import STACK from './constants';
import styles from './styles.module.scss';

const Stack: React.FunctionComponent = () => {
    return <div className={styles.container}>
        <h2>my current tech stack</h2>
        <div className={styles.stack}>
        {STACK.map((tech, idx) => (
            <a href={tech.href} key={idx}>
                <img src={tech.logo} alt={tech.alt} />
            </a>
        ))}
        </div>
    </div>
}

export default Stack;