'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import React from 'react';
import Socials from "@/components/Socials/Socials";
import {Social} from "@/types/Social";

import styles from './AboutMeCard.module.css';

interface AboutMeCardProps {
    userBio: string;
    userImage: string;
    socials: Social[];
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ userBio, userImage, socials }) => {
    const router = useRouter();

    return (
        <section className={styles.aboutMe}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image
                        src={userImage}
                        alt="Profile"
                        className={styles.image}
                        width={200}
                        height={200}
                    />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        {userBio}
                    </p>
                    <button
                        className={styles.button}
                        onClick={() => router.push('/about')}
                    >
                        Learn More About Me
                    </button>
                </div>
                <div className={styles.socials}>
                    <Socials socials={socials}/>
                </div>
            </div>
        </section>
    );
};

export default AboutMeCard;
