import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const About: React.FunctionComponent = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
	const [scrolled, setScrolled] = useState<boolean>(false)

	const windowScroll = () => {
		let mouseY = window.scrollY;
		if (mouseY > 50) {
			setScrolled(true);
		}
	};

	window.addEventListener('scroll', windowScroll);

	useEffect(() => {
		if (scrolled) {
			aboutRef.current!.classList.add(styles.animate);
		}
	}, [scrolled])

	const aboutText = 'i love collecting, analyzing, and visualizing data';

    return <div className={styles.container}>
        <div className={styles.about} ref={aboutRef}>
					<h3>{aboutText}</h3>
        </div>
    </div>
}

export default About;