import {Component} from "@angular/core";
import {GlobalService} from "../../shared/services/global.service";
import {PageComponent} from "../../shared/components/page/page.component";

@Component({
    moduleId: module.id,
    selector: 'employee-position',
    template: `
                <h3>Employee positions</h3>
                <br>
                <info-box [infoBoxShown]="showPageInfo()" [infoMessage]="pageInfo" 
                    (removeInfo)="removePageInfo()"></info-box>
                <!--<employee-position-form></employee-position-form>-->
                <employee-positions-list></employee-positions-list>
`
})

export class EmployeePositionComponent extends PageComponent {

    pageInfo = "This is the page for adding new employee positions";

    constructor(private globalService:GlobalService) {
        super(globalService)
    }

    removePageInfo() {
        this.globalService.setShowEmployeePositionsInfoBox(false);
    }

    showPageInfo() {
        return this.globalService.getShowEmployeePositionsInfoBox();
    }

}
