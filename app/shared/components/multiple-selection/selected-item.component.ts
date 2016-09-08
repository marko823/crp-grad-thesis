import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'selected-item',
    template: `

        <div>{{value.text}}<a (click)="removeSelectedItemHandler()"><span class="glyphicon glyphicon-remove"></span></a></div>

        `
})

export class SelectedItemComponent {

    @Input()
    value:string;

    @Output()
    removeSelectedItem = new EventEmitter();

    removeSelectedItemHandler() {
        this.removeSelectedItem.emit(this.value);
    }

}