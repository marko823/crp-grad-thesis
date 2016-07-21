import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Project} from "../../shared/model/project";
import {HighlightDirective} from "../../shared/directives/highlight.directive";

@Component({

    selector: 'project-item',
    template: `
        <div class="project-item" [myHighlight]>
            {{project.name}}
            
            <button class="btn btn-default btn-xs"
                    (click)="removeProject()">remove</button>
        
        </div>
    `,
    styles: [`
        .project-item {
            height: 22px;
        }
        
        .btn-default {
            float: right;
        }
    `],
    directives: [HighlightDirective]
})
export class ProjectItemComponent {

    @Input() project:Project;
    @Input() listIndex:number;

    @Output() removeProjectEmitter = new EventEmitter();

    removeProject() {
        this.removeProjectEmitter.emit(this.listIndex);
    }

}
