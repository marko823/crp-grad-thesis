import {Injectable} from '@angular/core';
import {Project} from "../model/project";
import {PROJECTS} from "../model/mock-projects";

@Injectable()
export class ProjectService {

    //TODO: use promise
    getProjects(){
        return PROJECTS;
    }

    addProject(project: Project){
        PROJECTS.push(project);
    }


}