import courseshare from '../../assets/courseshare.svg';
import contrast from '../../assets/contrast.svg';
import centiment from '../../assets/centiment.svg';

interface Project {
    title: string;
    href: string;
    github: string;
    logo: string;
    description: string;
    stack: string[];
}

const PROJECTS: Project[] = [
    {
        title: 'centiment',
        href:'https://centiment.fyi',
        github: '',
        logo: centiment,
        description: 'analytics dashboard that visualizes market sentiment',
        stack: ['TypeScript', 'React', 'Next.js', 'Spring Boot', 'PostgreSQL']
    },
    {
        title: 'courseshare',
        href:'https://courseshareapp.com',
        github: 'https://github.com/BrianHee/courseshare',
        logo: courseshare,
        description: 'an intuitive course building and distributing platform for the internet',
        stack: ['TypeScript', 'React', 'NodeJS', 'Express', 'MongoDB']
    },
    {
        title: 'contrast',
        href: 'https://contrastdiff.netlify.app/',
        github: 'https://github.com/BrianHee/contrast-diffchecker',
        logo: contrast,
        description: 'a tool for visualizing textual differences between two samples of text',
        stack: ['React']
    }  
];

export default PROJECTS;