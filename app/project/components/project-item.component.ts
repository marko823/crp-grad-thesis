import {Component, Input} from '@angular/core';
import {Project} from "../../shared/model/project";

@Component({
    
    selector: 'project-item',
    template: `
        <div>{{project.name}}</div>
    `
})
export class ProjectItemComponent{
    
    @Input() project:Project;

}
