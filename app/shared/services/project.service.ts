import {Injectable} from "@angular/core";
import {Project} from "../model/project";
import {PROJECTS} from "../model/mock-projects";

@Injectable()
export class ProjectService {

    getProjects() {
        return PROJECTS;
    }

    addProject(project:Project) {
        PROJECTS.push(project);
    }

    removeProject(index:number) {
        PROJECTS.splice(index, 1);
    }

    sortedProjects(sortProperty:string, order:string) {

        let sortedProjects = PROJECTS;

        if (order === 'asc') {
            sortedProjects.sort((a, b) => {
                if (a[sortProperty] < b[sortProperty]) {
                    return -1;
                } else if (a[sortProperty] > b[sortProperty]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        else {
            sortedProjects.sort((a, b) => {
                if (a[sortProperty] < b[sortProperty]) {
                    return 1;
                } else if (a[sortProperty] > b[sortProperty]) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        return sortedProjects;

    }

}