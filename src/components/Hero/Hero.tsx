'use client';
import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import Link from "next/link";
import {rotatingTexts} from "@/types/constants";

const Hero: React.FC = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

  return (
      <div className={styles.hero}>
          <div className={styles.overlay}>
              <h1>Hello, I&apos;m Mehmet</h1>
              <div className={styles.rotatingText}>
                  {rotatingTexts.map((text, index) => (
                      <span
                          key={index}
                          className={`${styles.text} ${
                              index === currentTextIndex ? styles.visible : ''
                          }`}
                      >
                          {text}
                      </span>
                  ))}
              </div>
              <Link href="/projects" passHref>
                  <button className={styles.button}>
                      Review My Projects
                  </button>
              </Link>
          </div>
      </div>
  );
};

export default Hero;
