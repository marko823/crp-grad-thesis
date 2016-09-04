import {Component} from "@angular/core";
import {GlobalService} from "../../shared/services/global.service";
import {PageComponent} from "../../shared/components/page/page.component";

@Component({
    moduleId: module.id,
    selector: 'project',
    template: `
                <h3>Projects</h3>
                <br>
                <info-box [infoBoxShown]="showPageInfo()" [infoMessage]="pageInfo" 
                    (removeInfo)="removePageInfo()"></info-box>
                <project-form></project-form>
                <projects-table></projects-table>
`
})

export class ProjectComponent extends PageComponent {

    pageInfo = "This is the page for managing all of the company's projects";

    constructor(private globalService:GlobalService) {
        super(globalService);
    }

    removePageInfo() {
        this.globalService.setShowProjectsInfoBox(false);
    }

    showPageInfo() {
        return this.globalService.getShowProjectsInfoBox();
    }

}
