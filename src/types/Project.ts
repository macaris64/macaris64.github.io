import {Skill} from "@/types/Skill";

export enum ProjectType {
    Web = 'Web',
    Mobile = 'Mobile',
    Game = 'Game',
    Astronomy = 'Astronomy',
}

export interface Project {
    id: string;
    type: ProjectType;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    sourceCodeUrl: string;
    skills: Skill[];
    date: string;
    featured: boolean;
    order: number;
    hidden: boolean;
}
