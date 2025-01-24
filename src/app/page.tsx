'use client';
import React from 'react';
import styles from './page.module.css';
import Hero from "@/components/Hero/Hero";
import AboutMeCard from "@/components/AboutMe/AboutMeCard";
import RootStoreInstance from "@/stores/RootStore";

const Home: React.FC = () => {
    const userStore = RootStoreInstance.useUserStore();
    const userBio = userStore.getUserBioShort();
    const userImage = userStore.getUserImage();
    const socials = userStore.getUserSocials();

    return (
        <main className={styles.container}>
            <Hero />
            <AboutMeCard userBio={userBio} userImage={userImage} socials={socials} />
        </main>
    )
};

export default Home;
