import {Component, ViewChild} from "@angular/core";
import {EmployeeFormComponent} from "./employee-form.component";
import {EmployeesListComponent} from "./employees-list.component";
import {InfoBoxComponent} from "../../shared/components/info-box/info-box.component";
import {GlobalService} from "../../shared/services/global.service";
import {PageComponent} from "../../shared/components/page/page.component";

@Component({
    moduleId: module.id,
    selector: 'employee',
    template: `
                <h3>Employees</h3>
                <br>
                <info-box [infoBoxShown]="showPageInfo()" [infoMessage]="pageInfo" 
                    (removeInfo)="removePageInfo()"></info-box>
                <employee-form (employeeAdded)="addEmployeeToList($event)"></employee-form>
                <employees-list #employeeList></employees-list>
                
`,
    directives: [InfoBoxComponent, EmployeeFormComponent, EmployeesListComponent]
})

export class EmployeeComponent extends PageComponent {

    @ViewChild('employeeList')
    employeeList;

    pageInfo = "This is the page for managing all of the current employees";

    constructor(private globalService:GlobalService) {
        super(globalService);
    }

    removePageInfo() {
        this.globalService.setShowEmployeesInfoBox(false);
    }

    showPageInfo() {
        return this.globalService.getShowEmployeesInfoBox();
    }

    addEmployeeToList(employee:any) {
        this.employeeList.employees.push(employee);
    }


}
