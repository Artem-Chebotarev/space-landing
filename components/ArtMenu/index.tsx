import React, { ReactNode } from 'react';
import styles from './style.module.scss';
import cl from 'classnames';
import Link from 'next/link';
import { link } from 'fs';

interface ArtButtonProps {
    // children: ReactNode;
    // className?: string;
}

const links = [
    {
        id: 1,
        title: 'Home',
        href: '/',
    },
    {
        id: 2,
        title: 'Factions',
        href: '/',
    },
    {
        id: 3,
        title: 'Roadmap', 
        href: '/',
    },
];

export const ArtMenu: React.FC<ArtButtonProps> = ({ 
    // children,
    // className
}) => {
    return (
        <nav className={styles.artMenu}>
            <ul className={styles.artMenuList}>
                {links.map((elem) => (
                    <li 
                        key={elem.id}
                        className={styles.artMenuItem} 
                    >
                        <Link
                            href={elem.href}
                            className={styles.artMenuLink}
                        >
                            {elem.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>  
    );
}