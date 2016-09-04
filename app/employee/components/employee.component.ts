import {Component, ViewChild} from "@angular/core";
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
                <employee-form (employeeAdded)="addEmployee($event)"></employee-form>
                <employees-table #employeeTable></employees-table>
                <employee-detail></employee-detail>
                
`
})

export class EmployeeComponent extends PageComponent {

    @ViewChild('employeeTable')
    employeeTable;

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

    addEmployee(employee:any) {
        this.employeeTable.employees.push(employee);
    }


}
