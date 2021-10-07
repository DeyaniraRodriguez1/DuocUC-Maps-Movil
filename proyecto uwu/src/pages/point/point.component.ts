import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../popover/popover.component";

@Component({
    selector: 'point',
    templateUrl: './point.component.html',
    styleUrls: ['point.component.css']
})
export class PointComponent {

    constructor(public popoverController: PopoverController){}


    async popclick(event){
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            event
        });
        return await popover.present();
    }
    
}