import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'info-box',
    template: `
                <div *ngIf="infoBoxShown" class="container bg-info">
                    <div class="col-md-1 inline"><span class="glyphicon glyphicon-info-sign"></span></div>
                    <h5 class="col-md-10 inline">{{infoMessage}}</h5>
                    <a class="col-md-1inline" (click)="removeInfoHandler()"><span class="glyphicon glyphicon-remove"></span></a>
                </div>
`,
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