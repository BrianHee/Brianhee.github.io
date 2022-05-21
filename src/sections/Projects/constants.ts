import courseshare from '../../assets/courseshare.svg';

interface Project {
    title: string;
    href: string;
    logo: string;
    description: string;
    stack: string[];
}

const PROJECTS: Project[] = [
    {
        title: 'courseshare',
        href:'https://courseshareapp.com',
        logo: courseshare,
        description: 'an intuitive course building platform for the internet',
        stack: ['TypeScript', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB']
    }    
];

export default PROJECTS;