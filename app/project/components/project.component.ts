import {Component} from "@angular/core";
import {ProjectFormComponent} from "./project-form.component";
import {ProjectsListComponent} from "./projects-list.component";
import {InfoBoxComponent} from "../../shared/components/info-box.component";
import {GlobalService} from "../../shared/services/global.service";
import {PageComponent} from "../../shared/components/page.component";

@Component({
    moduleId: module.id,
    selector: 'project',
    template: `
                <h3>Projects</h3>
                <br>
                <info-box [infoBoxShown]="showPageInfo()" [infoMessage]="pageInfo" 
                    (removeInfo)="removePageInfo()"></info-box>
                <project-form></project-form>
                <projects-list></projects-list>
`,
    directives: [InfoBoxComponent, ProjectFormComponent, ProjectsListComponent]
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
