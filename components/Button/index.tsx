import React, { ReactNode } from 'react';
import styles from './style.module.scss';
import cl from 'classnames';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    onClick, 
    children
}) => {
    return (
        <button 
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    );
}