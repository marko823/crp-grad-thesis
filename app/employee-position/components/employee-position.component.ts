import {Component} from "@angular/core";
import {GlobalService} from "../../shared/services/global.service";
import {PageComponent} from "../../shared/components/page/page.component";

@Component({
    moduleId: module.id,
    selector: 'employee-position',
    templateUrl: 'employee-position.component.html'
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
