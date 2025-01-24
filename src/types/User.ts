import {Certificate} from "@/types/Certificate";
import {Education} from "@/types/Education";
import {Job} from "@/types/Job";
import {Social} from "@/types/Social";

export interface User {
    name: string;
    image: string;
    email: string;
    bio: string;
    bioShort: string;
    socials: Social[];
    certificates: Certificate[];
    educations: Education[];
    jobs: Job[];
}
