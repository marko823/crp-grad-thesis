import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Project} from "../../shared/model/project";
// import {TimerWrapper} from "@angular/platform-browser-dynamic/src/facade/async";

@Component({

    selector: 'project-item',
    template: `
        <div class="project-item" [myHighlight]>
            {{project.name}}
            
            <button *ngIf="!showUndo" class="btn btn-default btn-sm" (click)="deletedPressed()">
                <span class="glyphicon glyphicon-trash" aria-hidden="false"></span> del
            </button>
            
            <button *ngIf="showUndo" class="btn btn-default btn-sm" (click)="undoPressed()">
               <span class="glyphicon glyphicon-share-alt" aria-hidden="false"></span> undo
            </button>
        
        </div>
    `,
    styles: [`
        .project-item {
            height: 30px;
        }
        
        .btn-default {
            float: right;
        }
    `]
})
export class ProjectItemComponent {

    @Input() project:Project;
    @Input() listIndex:number;

    @Output() removeProjectEmitter = new EventEmitter();

    scheduledForDeletion:boolean;
    showUndo:boolean;

    constructor() {
        this.scheduledForDeletion = false;
        this.showUndo = false;
    }

    deletedPressed() {

        this.scheduledForDeletion = true;
        this.showUndo = true;

        setTimeout(() => {
            if (this.scheduledForDeletion) {
                this.removeProjectEmitter.emit(this.listIndex);
            }
        }, 5000);


    }

    undoPressed() {
        this.scheduledForDeletion = false;
        this.showUndo = false;
    }

}
