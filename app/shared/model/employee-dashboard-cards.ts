import {DashboardCard} from "./dashboard-card";

export var EMPLOYEE_DASHBOARD_CARDS = [

    new DashboardCard("Request day off", "The quickest way to get your desired day off approved.",
        "/request-days-off", "../../../../images/request-day-off.jpg"),

    new DashboardCard("Working schedule", "See the working schedule for the current month including public holidays " +
        "and approved days off.",
        "/schedule", "../../../../images/schedule.jpg"),

];
