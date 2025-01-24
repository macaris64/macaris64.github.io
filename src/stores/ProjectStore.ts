import {makeAutoObservable} from 'mobx';
import {createContext, useContext} from 'react';
import {Project, ProjectType} from "@/types/Project";

class ProjectStore {
    projects: Project[] = [
        {
            id: '1',
            type: ProjectType.Web,
            title: 'Udemy App',
            description: 'Udemy is an online learning platform aimed at professional adults and students. Udemy was launched in May 2010, and the platform offers courses in web development, business, IT, marketing, design, photography, health, music, and academics.',
            imageUrl: '/images/projects/udemy.png',
            projectUrl: 'https://udemy.com',
            sourceCodeUrl: 'https://udemy.com',
            skills: [
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
            ],
            date: 'Feb 2022 - Present',
            featured: true,
            order: 1,
            hidden: false
        },
        {
            id: '2',
            type: ProjectType.Web,
            title: 'BluTV App',
            description: 'BluTV is a Turkish subscription video on demand service owned by the digital media platform Digital Broadcasting Group. BluTV offers Turkish TV series, movies, and documentaries.',
            imageUrl: '/images/projects/blutv.png',
            projectUrl: 'https://blutv.com',
            sourceCodeUrl: 'https://blutv.com',
            skills: [
                {
                    id: '3',
                    name: 'Node.js',
                },
                {
                    id: '4',
                    name: 'Python',
                },
                {
                    id: '6',
                    name: 'JavaScript',
                },
            ],
            date: 'Jan 2020 - Feb 2022',
            featured: true,
            order: 2,
            hidden: false
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    getProjects() {
        return this.projects;
    }
}

const ProjectStoreContext = createContext<ProjectStore>(new ProjectStore());
export const useProjectStore = () => useContext(ProjectStoreContext);

export default ProjectStore;
