/**
 * Created by martina on 9/5/16.
 */

export class WorkDay {

    constructor(public title:string,
                public start:string,
                public color:string) {
    }

    copyOf() {
        return new WorkDay(this.title, this.start, this.color);
    }

}