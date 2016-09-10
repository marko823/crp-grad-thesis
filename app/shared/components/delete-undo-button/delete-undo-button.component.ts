import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'delete-undo-button',
    templateUrl: 'delete-undo-button.component.html',
    styleUrls: ['delete-undo-button.component.css']
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

        setTimeout(() => {
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
