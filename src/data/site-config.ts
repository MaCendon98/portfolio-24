export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};


export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Mattia Cendon',
    subtitle: 'UX/UI Designer',
    description: 'Mein Portfolio für UX/UI Design',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Mattia Cendon'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Über mich',
            href: '/about'
        },
        {
            text: 'Lebenslauf',
            href: '/resume'
        }
    ],
    footerNavLinks: [
        {
            text: 'Kontakt',
            href: '/contact'
        },
        {
            text: 'Impressum',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://linkedin.com/in/mattia-cendon-332312146'
        }
    ],
    hero: {
        title: 'Mattia Cendon | UX/UI Designer',
        text: "Ich gestalte Webseiten und SaaS-Applikationen, die durch einfaches, klares und intuitives Design überzeugen. Bei jeder Entscheidung sorge ich dafür, dass der Nutzer im Mittelpunkt steht.",
        image: {
            src: '/hero.jpeg',
            alt: 'Mattia Cendon'
        },
        actions: [
            {
                text: 'Kontakt',
                href: '/contact'
            }
        ]
    },
    projectsPerPage: 8
};

export default siteConfig;
