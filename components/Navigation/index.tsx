import React, { Fragment, ReactNode } from 'react';
import styles from './style.module.scss';
import cl from 'classnames';
import Link from 'next/link';

interface NavigationProps {};

const links = [
    {
        id: 1,
        title: 'Home',
        href: '/',
        active: true,
    },
    {
        id: 2,
        title: 'Factions',
        href: '/',
        active: false,
    },
    {
        id: 3,
        title: 'Roadmap', 
        href: '/',
        active: false,
    },
];

export const Navigation: React.FC<NavigationProps> = () => {
    return (
        <nav className={styles.navigation}>
            {links.map((elem, ind) => (
                <Fragment key={elem.id}>
                    <Link
                        href={elem.href}
                        className={cl(styles.navigationLink, elem.active && styles.navigationLinkActive)}
                    >
                        {elem.title}
                    </Link>
                    {ind < links.length - 1 && <span className={styles.navigationStar} />}
                </Fragment>
            ))}
        </nav>  
    );
}