import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {SELECT_DIRECTIVES} from "ng2-select/ng2-select";
import {SelectedItemComponent} from "./selected-item.component";
import Immutable = require('immutable');

@Component({
    moduleId: module.id,
    selector: 'multiple-selection',
    templateUrl: 'multiple-selection.component.html',
    directives: [SELECT_DIRECTIVES, SelectedItemComponent],
    styles: [`
        .selected-items{
            float: right;
            padding-bottom: 20px;
        }
    `]
})

export class MultipleSelectionComponent implements OnInit {

    @Input()
    itemsName:string;

    @Input()
    items:any;

    @Output()
    changeSelectedItems = new EventEmitter();

    initialItems:any;
    selectedItems:any;


    ngOnInit() {
        this.initialItems = this.items;
        this.selectedItems = Immutable.fromJS([]);
        this.changeSelectedItems.emit(this.selectedItems);
    }

    selectItem(optionItem:any) {

        this.removeItem(optionItem.text);
        this.selectedItems = this.selectedItems.push(optionItem.text);
        this.changeSelectedItems.emit(this.selectedItems);

    }

    resetSelect() {
        this.items = this.initialItems;
        this.selectedItems = Immutable.fromJS([]);
        this.changeSelectedItems.emit(this.selectedItems);
    }

    removeItem(text:string) {
        let indexToRemove = undefined;
        for (var i = 0; i < this.items.size; i++) {
            if (this.items.get(i) === text) {
                indexToRemove = i;
            }
        }
        this.items = this.items.delete(indexToRemove);
    }

    removeSelectedItem(text:string) {
        let indexToRemove = undefined;
        for (var i = 0; i < this.selectedItems.size; i++) {
            if (this.selectedItems.get(i) === text) {
                indexToRemove = i;
            }
        }
        this.selectedItems = this.selectedItems.delete(indexToRemove);
        this.items = this.items.push(text);
    }

}