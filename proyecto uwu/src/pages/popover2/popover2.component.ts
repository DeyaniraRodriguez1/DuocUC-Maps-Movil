import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController, PopoverController, AlertController } from "@ionic/angular";
import { ClosemodComponent } from "../modals/closemod/closemod.component";
import { PerfilmodComponent } from "../modals/perfilmod/perfilmod.component";

@Component({
    selector: 'popover2',
    templateUrl: './popover2.component.html',
    styleUrls: ['./popover2.component.css']
})
export class Popover2Component {
    
    constructor(public popoverController: PopoverController,
                public alertController: AlertController,){}
    

    close(){
        this.popoverController.dismiss();
    }

}