'use client';
import React from 'react';
import Socials from "@/components/Socials/Socials";
import RootStoreInstance from "@/stores/RootStore";

import styles from './page.module.css';

const ContactPage: React.FC = () => {
    const userStore = RootStoreInstance.useUserStore();
    const name = userStore.getUserName();
    const email = userStore.getUserEmail();
    const socials = userStore.getUserSocials();

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactLeft}>
                <h2>Contact Info</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <div className={styles.socialMedia}>
                    <Socials socials={socials} />
                </div>
            </div>
            <div className={styles.contactRight}>
                <h2>Contact Form</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" id="fullName" name="fullName" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={4} required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
