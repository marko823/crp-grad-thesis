"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employee_service_1 = require("../../shared/services/employee.service");
var employee_item_component_1 = require("./employee-item.component");
var EmployeesListComponent = (function () {
    function EmployeesListComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeesListComponent.prototype.ngOnInit = function () {
        this.employees = this.employeeService.getEmployees();
    };
    EmployeesListComponent = __decorate([
        core_1.Component({
            selector: 'employees-list',
            template: "\n            \n        <h3>Employees List</h3>\n        \n        <ul class=\"employees\">\n          <li *ngFor=\"let employee of employees\">\n            <employee-item [employee]=\"employee\"></employee-item>\n          </li>\n        </ul>\n        \n    ",
            directives: [employee_item_component_1.EmployeeItemComponent]
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], EmployeesListComponent);
    return EmployeesListComponent;
}());
exports.EmployeesListComponent = EmployeesListComponent;
//# sourceMappingURL=employees-list.component.js.map