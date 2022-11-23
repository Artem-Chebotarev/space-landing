import Link from "next/link";

import styles from './style.module.scss';
import cl from 'classnames';

interface SocialNetworksProps {

}

const socialNetworks = [
    {
        id: 1,
        title: 'Discord',
        className: 'Discord',
        link: 'https://discord.com/',
    },
    {
        id: 2,
        title: 'Twitter',
        className: 'Twitter',
        link: 'https://twitter.com/',
    },
    {
        id: 3,
        title: 'Medium',
        className: 'Medium', 
        link: 'https://medium.com/',
    },
];

export const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
    return (
        <ul className={styles.socialNetworks}>
            {socialNetworks.map((elem) => (
                <li 
                    key={elem.id}
                    className={styles.socialNetworksItem}
                >
                    <a 
                        href={elem.link}
                        target='_blank'
                        rel="noreferrer"
                        className={cl(styles.socialNetworksLink, styles[`socialNetworks${elem.className}`])}
                    >
                        {elem.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}