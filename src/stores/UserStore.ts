import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import { User } from '@/types/User';

class UserStore {
    user: User = {
        name: 'Mehmet Acar',
        image: '/images/profile.jpg',
        email: 'mehmetacar683@gmail.com',
        bio: 'Hello! I\'m a software engineer with a passion for building scalable, maintainable, and efficient systems. I specialize in full-stack development, with a focus on Python and JavaScript frameworks. I have a strong background in computer science, with a B.A. in Computer Science from Pamukkale University. I have experience working at BluTV and Udemy, where I developed and maintained core microservices, ensuring a seamless and secure user experience. I am skilled in advanced Python frameworks, including Sanic, Flask, FastAPI, and Tornado, and have expertise in microservices architecture, MongoDB, JWT, and REST API development. I am passionate about creating innovative solutions that enhance user experience and drive business growth. I am excited to leverage my technical skills and industry knowledge to contribute to a dynamic team and deliver high-quality software solutions.',
        bioShort: 'Hi, I’m Mehmet! I specialize in building modern and responsive web applications using technologies like React, TypeScript, and Node.js. I’m passionate about solving problems and creating innovative solutions.',
        socials: [
            {
                name: 'LinkedIn',
                icon: 'fab fa-linkedin',
                link: 'https://linkedin.com/in/mehmetacar',
            },
            {
                name: 'GitHub',
                icon: 'fab fa-github',
                link: 'https://github.com/macaris64',
            },
            {
                name: 'X',
                icon: 'fab fa-x-twitter',
                link: 'https://x.com/lumgoo',
            },
            {
                name: 'Medium',
                icon: 'fab fa-medium',
                link: 'https://medium.com/@mehmetdev',
            }
        ],
        certificates: [
            {
                title: 'NASA Space Apps 2024',
                issuer: 'NASA - National Aeronautics and Space Administration',
                date: 'Oct 2024',
                image: '/images/certificate/nasa.png',
                description: 'Participated in the NASA Space Apps Challenge 2024. The NASA Space Apps Challenge is an international hackathon that occurs over 48 hours in cities around the world. The event embraces collaborative problem solving with a goal of producing relevant open-source solutions to address global needs applicable to both life on Earth and life in space.',
                link: 'https://github.com/macaris64/certificates/blob/master/nasa-space-apps-2024-mehmet-acar.pdf'
            },
            {
                title: 'Amplitude Foundations - Analytics',
                issuer: 'Amplitude',
                date: 'Mar 2024',
                image: '/images/certificate/amplitude.png',
                description: 'Completed the Amplitude Foundations course. The course covers the basics of analytics and how to use Amplitude to analyze user behavior.',
                link: 'https://www.credly.com/badges/5c79b9c5-490d-4da2-8c94-e0ad7f8a9601/linked_in_profile',
            },
            {
                title: 'Data Pipelines and Workflow Scheduling',
                issuer: 'Miuul',
                date: 'Mar 2024',
                image: '/images/certificate/miuul.png',
                description: 'Completed the Data Pipelines and Workflow Scheduling course. The course covers the basics of data pipelines and workflow scheduling.',
                link: 'https://learning.miuul.com/certificates/ppm9qyojmi',
            },
            {
                title: 'Let’s Up',
                issuer: 'TEB - Turkish Economy Bank',
                date: 'Nov 2019',
                image: '/images/certificate/teb.png',
            },
            {
                title: 'Front-End Web UI Frameworks: Bootstrap 4',
                issuer: 'The Hong Kong University of Science and Technology',
                date: 'Dec 2017',
                image: '/images/certificate/hong-kong-university.png',
            }
        ],
        educations: [
            {
                name: 'Pamukkale University',
                degree: 'Bachelor in Computer Science',
                date: 'Sep 2015 - Jun 2019',
                image: '/images/education/pau.png',
                location: 'Denizli, Türkiye',
                description: 'I studied computer science at PAU, where I learned about algorithms, data structures, and software engineering.',
                link: 'https://www.berkeley.edu/',
            },
        ],
        jobs: [
            {
                name: 'Udemy',
                title: 'Software Engineer',
                date: 'Feb 2022 - Present',
                image: '/images/job/udemy.png',
                location: 'Istanbul, Türkiye',
                description: 'As a Full Stack Engineer in the Instructor Insights and Interactions PDE (Product, Design, Engineering) team, part of the Instructor Experience portfolio, my role involves developing and implementing comprehensive systems and solutions. These systems are designed to provide instructors with valuable insights about their learners, as well as equipping them with interactive tools to engage effectively with their learners. ',
                link: 'https://www.udemy.com/',
            },
            {
                name: 'BluTV',
                title: 'Software Engineer',
                date: 'Jan 2020 - Feb 2022',
                image: '/images/job/blutv.png',
                location: 'Istanbul, Türkiye',
                description: 'BluTV, a trailblazer in the entertainment industry, specializes in offering state-of-the-art streaming media services. As a Backend Developer at BluTV, I played a crucial role in developing and maintaining the core microservices that power the platform\'s digital infrastructure, ensuring a seamless and secure user experience. My role at BluTV was integral to creating an engaging, secure, and smooth entertainment experience. By leveraging a blend of technical skills and innovative solutions, I contributed significantly to BluTV\'s reputation as a leading entertainment provider.BluTV, a trailblazer in the entertainment industry, specializes in offering state-of-the-art streaming media services. As a Backend Developer at BluTV, I played a crucial role in developing and maintaining the core microservices that power the platform\'s digital infrastructure, ensuring a seamless and secure user experience. Key Responsibilities: - Developed and maintained authentication and authorization microservices, providing secure access to BluTV’s streaming services. - Managed subscription services, including integration of third-party payment systems, credit card processing, one-time passwords (OTPs), and mobile payment solutions. This streamlined the subscription process, enhancing user convenience. - Engineered a custom API gateway to optimize microservice interactions and external application communications, improving efficiency and user experience. Technical Expertise: - Proficient in advanced Python frameworks (Sanic, Flask, FastAPI, Tornado), each tailored to specific service needs. - Utilized MongoDB, a versatile NoSQL database, for efficient large-scale data management. - Specialized in microservices architecture, ensuring scalable, maintainable, and efficient systems. - Knowledgeable in JWT for secure data transmission and skilled in REST API development for seamless service integration. - Understood the technical aspects of streaming media and OTT platforms, ensuring high-quality, uninterrupted streaming services. My role at BluTV was integral to creating an engaging, secure, and smooth entertainment experience. By leveraging a blend of technical skills and innovative solutions, I contributed significantly to BluTV\'s reputation as a leading entertainment provider. ',
                link: 'https://www.blutv.com/',
            }
        ]
    }

    constructor() {
        makeAutoObservable(this);
    }

    getUserName() {
        return this.user.name;
    }

    getUserImage() {
        return this.user.image;
    }

    getUserEmail() {
        return this.user.email;
    }

    getUserBio() {
        return this.user.bio;
    }

    getUserBioShort() {
        return this.user.bioShort;
    }

    getUserSocials() {
        return this.user.socials;
    }

    getUserCertificates() {
        return this.user.certificates;
    }

    getUserEducations() {
        return this.user.educations;
    }

    getUserJobs() {
        return this.user.jobs;
    }
}

const UserStoreContext = createContext<UserStore>(new UserStore());
export const useUserStore = () => useContext(UserStoreContext);

export default UserStore;
