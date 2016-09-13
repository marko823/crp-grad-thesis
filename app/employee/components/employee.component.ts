import {Component, ViewChild} from "@angular/core";
import {GlobalService} from "../../shared/services/global.service";
import {PageComponent} from "../../shared/components/page/page.component";
import {EmployeeService} from "../../shared/services/employee.service";

@Component({
    moduleId: module.id,
    selector: 'employee',
    template: `
                <div class="col-md-10 scrollable-content">
                <h3>Employees</h3>
                <br>
                <info-box 
                    [infoBoxShown]="showPageInfo()" 
                    [infoMessage]="pageInfo" 
                    (removeInfo)="removePageInfo()"></info-box>
                <employee-form 
                    (employeeAdded)="addEmployee($event)"></employee-form>
                <employees-table #employeeTable 
                    (closeEmployeeDetails)="closeEmployeeDetail($event)"
                    (showDetailsEmployee)="showEmployeeDetail($event)"></employees-table>
                <employee-detail *ngIf="showEmployeeDetails" 
                    [employee]="employeeDetails" 
                    (closeEmployeeDetails)="closeEmployeeDetail($event)"></employee-detail>
                    </div>
                
`
})

export class EmployeeComponent extends PageComponent {

    @ViewChild('employeeTable')
    employeeTable;

    showEmployeeDetails:boolean;

    employeeDetails:any;

    pageInfo = "This is the page for managing all of the current employees";

    constructor(private globalService:GlobalService, private employeeService:EmployeeService) {
        super(globalService);
        this.showEmployeeDetails = false;
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

    showEmployeeDetail(employeeId) {
        this.employeeDetails = this.employeeService.getEmployee(employeeId);
        this.showEmployeeDetails = true;
    }

    closeEmployeeDetail(event:any) {
        if (event == "" || event == this.employeeDetails.id) {
            this.showEmployeeDetails = false;
        }
    }


}
