import courseshare from '../../assets/courseshare.svg';

interface Project {
    title: string;
    href: string;
    logo: string;
}

const PROJECTS: Project[] = [
    {
        title: 'courseshare',
        href:'https://courseshareapp.com',
        logo: courseshare
    }    
];

export default PROJECTS;