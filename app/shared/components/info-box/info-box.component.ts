import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'info-box',
    templateUrl: 'info-box.component.html',
    styleUrls: ['info-box.component.css']
})

export class InfoBoxComponent {

    @Input()
    infoMessage:string;

    @Input()
    infoBoxShown:boolean;

    @Output()
    removeInfo = new EventEmitter();

    removeInfoHandler() {
        this.removeInfo.emit(null);
    }

}