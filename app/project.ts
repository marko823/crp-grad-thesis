import {Employee} from "./employee";

export class Project{

    //TODO
    // array of tech used on project
    constructor(
        public id: number,
        public name: string,
        public predictedBeginDate: Date,
        public predictedEndDate: Date,
        public realBeginDate: Date,
        public realEndDate: Date,
        public employees: Array<Employee>
    ) {  }

}