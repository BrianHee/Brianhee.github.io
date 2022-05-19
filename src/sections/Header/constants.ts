import email from '../../assets/email.svg';
import git from '../../assets/git.svg';

interface Socials {
    logo: string;
    href: string;
}

const SOCIALS: Socials[] = [
    {
        logo: email,
        href: 'mailto:brian.hees.kim@gmail.com'
    },
    {
        logo: git,
        href: 'https://github.com/BrianHee'
    }
]

export default SOCIALS;