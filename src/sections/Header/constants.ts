import email from '../../assets/email.svg';
import git from '../../assets/git.svg';
import resume from '../../assets/resume.svg';

interface Socials {
    logo: string;
    href: string;
    alt: string;
}

const SOCIALS: Socials[] = [
    {
        logo: resume,
        href: '/resume.pdf',
        alt: 'resume'
    },
    {
        logo: email,
        href: 'mailto:brian.hees.kim@gmail.com',
        alt: 'email'
    },
    {
        logo: git,
        href: 'https://github.com/BrianHee',
        alt: 'git'
    }
]

export default SOCIALS;