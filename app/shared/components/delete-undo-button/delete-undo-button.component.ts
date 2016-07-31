import {Component, EventEmitter, Output} from "@angular/core";
import {TimerWrapper} from "@angular/platform-browser-dynamic/src/facade/async";

@Component({

    selector: 'delete-undo-button',
    template: `
            <button *ngIf="!showUndo" class="btn btn-default btn-sm" (click)="deletedPressed()">
                <span class="glyphicon glyphicon-trash" aria-hidden="false"></span> del
            </button>
            
            <button *ngIf="showUndo" class="btn btn-default btn-sm" (click)="undoPressed()">
               <span class="glyphicon glyphicon-share-alt" aria-hidden="false"></span> undo
            </button> 
    `
})
export class DeleteUndoButtonComponent {

    @Output() proceedDeletionEmitter = new EventEmitter();

    scheduledForDeletion:boolean;
    showUndo:boolean;

    constructor() {
        this.scheduledForDeletion = false;
        this.showUndo = false;
    }

    deletedPressed() {

        this.scheduledForDeletion = true;
        this.showUndo = true;

        TimerWrapper.setTimeout(() => {
            if (this.scheduledForDeletion) {
                this.proceedDeletionEmitter.emit(null);
            }
        }, 5000);

    }

    undoPressed() {
        this.scheduledForDeletion = false;
        this.showUndo = false;
    }

}
