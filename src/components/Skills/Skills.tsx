import React from 'react';

import {Skill} from "@/types/Skill";

import styles from './Skills.module.css'

interface SkillsProps {
    skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div className={styles.skillsContainer}>
            {skills.map((skill) => (
                <SkillItem key={skill.id} name={skill.name}/>
            ))}
        </div>
    );
};

const SkillItem = ({name}: { name: string }) => {
    return (
        <div className={styles.skill}>
            {name}
        </div>
    );
}

export default Skills;
