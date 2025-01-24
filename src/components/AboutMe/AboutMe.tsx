'use client';
import React from "react";
import Socials from "@/components/Socials/Socials";

import styles from "./AboutMe.module.css";
import {Social} from "@/types/Social";

interface AboutMeProps {
    userBio: string;
    socials: Social[];
}

const AboutMe: React.FC<AboutMeProps> = ({userBio, socials}) => {
    return (
        <div className={styles.aboutContainer}>
            <section className={styles.aboutSection}>
                <h2>About Me</h2>
                <p>
                    {userBio}
                </p>
            </section>
            <section className={styles.socialMedia}>
                <Socials socials={socials}/>
            </section>
        </div>
    );
};

export default AboutMe;
