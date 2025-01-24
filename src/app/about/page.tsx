'use client';
import React from 'react';
import styles from './page.module.css';
import Card from "@/components/Certificate/Card";
import AboutMe from "@/components/AboutMe/AboutMe";
import RootStoreInstance from "@/stores/RootStore";

const AboutPage: React.FC = () => {
    const userStore = RootStoreInstance.useUserStore();

    const jobs = userStore.getUserJobs();
    const educations = userStore.getUserEducations();
    const certificates = userStore.getUserCertificates();
    const userBio = userStore.getUserBio();
    const socials = userStore.getUserSocials();

    return (
        <div className={styles.aboutContainer}>
            <AboutMe userBio={userBio} socials={socials} />
            <section className={styles.aboutSection}>
                <h2>{'Experiences'}</h2>
                {jobs.map((exp, index) => (
                    <Card
                        key={index}
                        type={'job'}
                        title={exp.title}
                        issuer={exp.name + ' - ' + exp.location}
                        date={exp.date}
                        image={exp.image}
                        description={exp.description}
                        link={exp.link}
                    />

                ))}
            </section>
            <section className={styles.aboutSection}>
                <h2>{'Education'}</h2>
                {educations.map((edu, index) => (
                    <Card
                        type={'education'}
                        key={index}
                        title={edu.name}
                        issuer={edu.degree}
                        date={edu.date}
                        image={edu.image}
                        description={edu.description}
                        link={edu.link}
                    />
                ))}
            </section>
            <section className={styles.aboutSection}>
                <h2>{'Certificate'}</h2>
                {certificates.map((cert, index) => (
                    <Card
                        type={'certificate'}
                        key={index}
                        title={cert.title}
                        issuer={cert.issuer}
                        date={cert.date}
                        image={cert.image}
                        description={cert.description}
                        link={cert.link}
                    />
                ))}
            </section>
        </div>
    );
};

export default AboutPage;
