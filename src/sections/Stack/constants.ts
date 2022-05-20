interface Stack {
    logo: string;
    alt: string;
    href: string;
}

const STACK: Stack[] = [
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        alt: 'reactjs',
        href: 'https://reactjs.org'
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        alt: 'typescript',
        href: 'https://www.typescriptlang.org'
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        alt: 'nodejs',
        href: 'https://nodejs.org/en'
    },
    {
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        alt: 'expressjs',
        href: 'https://expressjs.com/'
    }
]

export default STACK;