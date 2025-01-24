import UserStore, { useUserStore } from "@/stores/UserStore";
import ProjectStore, { useProjectStore } from "@/stores/ProjectStore";
import SkillStore, { useSkillStore } from "@/stores/SkillStore";

class RootStore {
    userStore: UserStore;
    useUserStore = useUserStore;
    projectStore: ProjectStore;
    useProjectStore = useProjectStore;
    skillStore: SkillStore;
    useSkillStore = useSkillStore;

    constructor() {
        this.userStore = new UserStore();
        this.projectStore = new ProjectStore();
        this.skillStore = new SkillStore();
    }
}

const RootStoreInstance = new RootStore();

export default RootStoreInstance;
