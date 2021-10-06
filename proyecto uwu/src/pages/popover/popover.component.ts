import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
    selector: 'popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.css']
})
export class PopoverComponent {
    
    constructor(public popoverController: PopoverController){}
    
 

    close(){
        this.popoverController.dismiss();
    }
}