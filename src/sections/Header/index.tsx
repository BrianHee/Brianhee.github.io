import React from 'react';
import styles from './styles.module.scss';

import SOCIALS from './constants';

const Header: React.FunctionComponent = () => {
    return <div className={styles.container}>
        <h1>brian kim</h1>
        <h2>software developer</h2>
        <div className={styles.links}>
            {SOCIALS.map((social, idx) => (
                <a href={social.href} key={idx}>
                    <img src={social.logo}/>
                </a>
            ))}
        </div>
    </div>
}

export default Header;