import {Component, Input, Output, EventEmitter} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'sort-buttons',
    template: `
        <a (click)="ascendingOrderClicked()"><span class="glyphicon glyphicon-chevron-up"></span></a>
        <a (click)="descendingOrderClicked()"><span class="glyphicon glyphicon-chevron-down"></span></a>
    `
})
export class SortButtonsComponent {

    @Input()
    sortProperty:string;

    @Output()
    ascendingOrder = new EventEmitter();

    @Output()
    descendingOrder = new EventEmitter();

    ascendingOrderClicked() {
        this.ascendingOrder.emit(this.sortProperty);
    }

    descendingOrderClicked() {
        this.descendingOrder.emit(this.sortProperty);
    }

}
