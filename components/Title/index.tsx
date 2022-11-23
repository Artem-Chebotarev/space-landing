import React, { ReactNode } from 'react';
import styles from './style.module.scss';
import cl from 'classnames';

interface TitleProps {
    size?: 'Medium' | 'Large';
    children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({
    size = 'Medium', 
    children
}) => {
    return (
        <h2 className={cl(styles.title, styles[`title${size}`])}>
            {children}
        </h2>
    );
}