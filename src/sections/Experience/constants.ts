import classlink from '../../assets/classlink.png';
import yale from '../../assets/yale.png';

interface Experience {
    company: string;
    logo: string;
    dates: string;
    title: string;
}

const EXPERIENCE: Experience[] = [
    {
        company: 'ClassLink',
        logo: classlink,
        dates: 'June 2022 - Present',
        title: 'Software Engineer'
    },
    {
        company: 'Yale School of Medicine',
        logo: yale,
        dates: 'Sept 2019 - Aug 2021',
        title: 'Research Associate'
    }
]

export default EXPERIENCE;