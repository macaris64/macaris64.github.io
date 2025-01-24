'use client';
import React, {useState} from 'react';

import styles from './page.module.css';
import RootStoreInstance from "@/stores/RootStore";
import Skills from "@/components/Skills/Skills";

const ProjectsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('All');
    const projects = RootStoreInstance.useProjectStore().getProjects();

    const filterProjects = (type: string) => {
        return projects.filter(project => type === 'All' || project.type === type);
    };

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.tabs}>
                {['All', 'Astronomy', 'Mobile', 'Game', 'Web'].map((tab) => (
                    <button
                        key={tab}
                        className={styles.tabButton +`${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className={styles.projectsList}>
                {filterProjects(activeTab).map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
                        <div className={styles.projectInfo}>
                            <h3>{project.title}</h3>
                            <p><strong>Date:</strong> {project.date}</p>
                            <Skills skills={project.skills} />
                            <p><strong>Type:</strong> {project.type}</p>
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
