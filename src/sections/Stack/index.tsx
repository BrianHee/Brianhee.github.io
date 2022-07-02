import React, { useEffect, useRef } from 'react';
import STACK from './constants';
import styles from './styles.module.scss';

const Stack: React.FunctionComponent = () => {
    const stackRef = useRef<HTMLDivElement>(null)

    const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(styles.animate);
					observer.unobserve(entry.target);
					return;
				}
			});
		},
		{ rootMargin: '-30% 0% -30% 0%' }
	);


	useEffect(() => {
		observer.observe(stackRef.current!)
    }, []);

    return <div className={styles.container}>
        <h2>my tech stack</h2>
        <div className={styles.stack} ref={stackRef}>
        {STACK.map((tech, idx) => (
            <a href={tech.href} key={idx}>
                <img src={tech.logo} alt={tech.alt} />
            </a>
        ))}
        </div>
    </div>
}

export default Stack;