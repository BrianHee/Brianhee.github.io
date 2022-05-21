import courseshare from '../../assets/courseshare.svg';

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
    }    
];

export default PROJECTS;