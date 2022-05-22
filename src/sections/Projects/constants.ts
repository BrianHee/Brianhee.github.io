import courseshare from '../../assets/courseshare.svg';
import contrast from '../../assets/contrast.svg';

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
        title: 'courseshare',
        href:'https://courseshareapp.com',
        github: 'https://github.com/BrianHee/courseshare',
        logo: courseshare,
        description: 'an intuitive course building platform for the internet',
        stack: ['TypeScript', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB']
    },
    {
        title: 'contrast',
        href: 'https://contrast.herokuapp.com',
        github: 'https://github.com/BrianHee/contrast-diffchecker',
        logo: contrast,
        description: 'a tool to visualize textual differences between two samples of text',
        stack: ['React']
    }  
];

export default PROJECTS;