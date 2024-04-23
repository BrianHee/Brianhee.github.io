import React from 'react';
import styles from './styles.module.scss';
import SOCIALS from './constants';
import portrait from '../../assets/portrait.svg';

const Header: React.FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>brian kim</h1>
                <h2>software developer</h2>
                <div className={styles.links}>
                    {SOCIALS.map((social, idx) => (
                        <a href={social.href} key={idx}>
                            <img src={social.logo} alt={social.alt}/>
                        </a>
                    ))}
                </div>
            </div>
            <div className={styles['portrait-container']}>
                <div className={styles['portrait-background']}>
                </div>
            </div>
        </div>
    )
}

export default Header;