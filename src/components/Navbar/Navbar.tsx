import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'

interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">{title}</Link>
            </div>
            <ul className={`${styles.navLinks}`}>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
