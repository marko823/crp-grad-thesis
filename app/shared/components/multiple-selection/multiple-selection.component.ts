import {Component, Input, Output, EventEmitter} from "@angular/core";
import Immutable = require('immutable');

@Component({
    moduleId: module.id,
    selector: 'multiple-selection',
    templateUrl: 'multiple-selection.component.html',
    styles: [`
        .selected-items{
            float: right;
            padding-bottom: 20px;
        }
    `]
})

export class MultipleSelectionComponent {

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

        this.removeItem(optionItem.id);
        this.selectedItems = this.selectedItems.push(optionItem);
        this.changeSelectedItems.emit(this.selectedItems);

    }

    resetSelect() {
        this.items = this.initialItems;
        this.selectedItems = Immutable.fromJS([]);
        this.changeSelectedItems.emit(this.selectedItems);
    }

    removeItem(id:string) {
        let indexToRemove = undefined;
        for (var i = 0; i < this.items.size; i++) {
            if (this.items.get(i).id === id) {
                indexToRemove = i;
            }
        }
        this.items = this.items.delete(indexToRemove);
    }

    removeSelectedItem(selectedItem:any) {
        let indexToRemove = undefined;
        let itemToRemove = undefined;
        for (var i = 0; i < this.selectedItems.size; i++) {
            if (this.selectedItems.get(i).id === selectedItem.id) {
                indexToRemove = i;
                itemToRemove = this.selectedItems.get(i);
            }
        }
        this.selectedItems = this.selectedItems.delete(indexToRemove);
        this.items = this.items.push(itemToRemove);
    }

}