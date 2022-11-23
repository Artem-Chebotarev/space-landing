import React, { ReactNode } from 'react';
import styles from './style.module.scss';
import cl from 'classnames';

interface ArtButtonProps {
    onClick: () => void;
    children: ReactNode;
    className?: string;
}

export const ArtButton: React.FC<ArtButtonProps> = ({
    onClick, 
    children,
    className
}) => {
    return (
        <button 
            className={cl(styles.artButton, className)}
            onClick={onClick}
        >
            <span className={styles.artButtonText}>{children}</span>
            <span className={styles.artButtonAngleLeft} />
            <span className={styles.artButtonAngleRight} />
        </button>
    );
}