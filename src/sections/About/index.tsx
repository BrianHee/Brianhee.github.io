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
			console.log('class added');
		}
	}, [scrolled])

	useEffect(() => {
		console.log(scrolled)
	}, [scrolled])

    return <div className={styles.container}>
        <div className={styles.about} ref={aboutRef}>
			<h3>I am a self-taught developer who enjoys tackling challenging problems and learning new technologies</h3>
        </div>
    </div>
}

export default About;