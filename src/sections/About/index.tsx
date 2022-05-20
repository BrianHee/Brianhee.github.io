import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

const About: React.FunctionComponent = () => {
    const aboutRef = useRef<HTMLDivElement>(null);

    const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(styles.animation);
					observer.unobserve(entry.target);
					return;
				}
			});
		},
		{ rootMargin: '-40% 0% -40% 0%' }
	);

    useEffect(() => {
        if (aboutRef) {observer.observe(aboutRef.current as Element)}
    }, [aboutRef])

    return <div className={styles.container}>
        <div className={styles.about} ref={aboutRef}>
            <h3>I am a self-taught developer who enjoys tackling challenging problems and learning new technologies</h3>
        </div>
    </div>
}

export default About;