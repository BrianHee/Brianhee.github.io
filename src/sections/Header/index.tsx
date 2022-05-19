import React from 'react';
import styles from './styles.module.scss';

import SOCIALS from './constants';

const Header: React.FunctionComponent = () => {
    return <div className={styles.container}>
        <h1>brian kim</h1>
        <h2>full stack developer</h2>
        <div className={styles.links}>
            {SOCIALS.map((social, i) => (
                <a href={social.href}>
                    <img src={social.logo}/>
                </a>
            ))}
        </div>
    </div>
}

export default Header;