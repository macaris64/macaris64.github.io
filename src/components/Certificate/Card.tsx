import React from 'react';
import styles from './Card.module.css';
import Image from "next/image";

interface CardProps {
    type: 'certificate' | 'education' | 'job';
    title: string;
    issuer: string;
    date: string;
    image: string;
    description?: string;
    link?: string;
}

const Card: React.FC<CardProps> = ({type, title, issuer, date, image, description, link}) => {
    const buttonLabel = (type: string) => {
        switch (type) {
            case 'certificate':
                return 'Show Certificate';
            case 'education':
                return 'Show School';
            case 'job':
                return 'Show Company';
            default:
                return 'Show';
        }
    };
    const imageAlt = `${title}-logo`;

    return (
        <div className={styles.card}>
            <div className={styles.cardLeft}>
                <Image src={image} alt={imageAlt} className={styles.cardImage} width={200} height={200}/>
            </div>
            <div className={styles.cardRight}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.certificateIssuer}>{issuer}</p>
                <p className={styles.certificateDate}>{date}</p>
                {description && (
                    <p className={styles.certificateDescription}>{description}</p>
                )}
                {link && (
                    <a href={link} className={styles.certificateLink} target="_blank" rel="noopener noreferrer">
                        {buttonLabel(type)}
                    </a>
                )}
            </div>
        </div>
    );
}

export default Card;
