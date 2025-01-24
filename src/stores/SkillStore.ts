import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import {Skill} from "@/types/Skill";

class SkillStore {
    skills: Skill[] = [
        {
            id: '1',
            name: 'React',
        },
        {
            id: '2',
            name: 'TypeScript',
        },
        {
            id: '3',
            name: 'Node.js',
        },
        {
            id: '4',
            name: 'Python',
        },
        {
            id: '5',
            name: 'Django',
        },
        {
            id: '6',
            name: 'JavaScript',
        },
        {
            id: '7',
            name: 'HTML',
        },
        {
            id: '8',
            name: 'CSS',
        },
        {
            id: '9',
            name: 'Jest'
        },
        {
            id: '10',
            name: 'React Testing Library'
        },
        {
            id: '11',
            name: 'Karma'
        },
        {
            id: '12',
            name: 'Jasmine'
        },
        {
            id: '13',
            name: 'Kotlin'
        },
        {
            id: '14',
            name: 'Spring Boot'
        },
        {
            id: '15',
            name: 'gRPC'
        },
        {
            id: '16',
            name: 'Protocol Buffers'
        },
    ]

    constructor() {
        makeAutoObservable(this);
    }

    getSkills() {
        return this.skills;
    }
}

const SkillStoreContext = createContext<SkillStore>(new SkillStore());
export const useSkillStore = () => useContext(SkillStoreContext);

export default SkillStore;
