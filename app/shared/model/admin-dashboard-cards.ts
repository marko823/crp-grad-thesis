import {DashboardCard} from "./dashboard-card";
/**
 * Created by martina on 9/10/16.
 */

export var ADMIN_DASHBOARD_CARDS = [

    new DashboardCard("Projects", "The place to add new project. See a list of all ongoing/future projects.",
        "/project", "../../../../images/projects.jpg"),

    new DashboardCard("Employees", "Just hired a new employee? Add it here. See a list of " +
        "all employees with their schedules of availability.",
        "/employee", "../../../../images/employees.jpg"),

    new DashboardCard("Employee Position", "Extending your company? Add the new employee positions here.",
        "/employee-position", "../../../../images/employee-positions.jpg"),

    new DashboardCard("Pending requests", "A place to approve the days off requests from your employees.",
        "/pending-requests", "../../../../images/pending-requests.jpg"),


];
