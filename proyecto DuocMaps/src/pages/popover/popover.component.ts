import { Component, OnInit } from "@angular/core";
import { ModalController, PopoverController } from "@ionic/angular";
import { PerfilmodComponent } from "../modals/perfilmod/perfilmod.component";

@Component({
    selector: 'popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.css']
})
export class PopoverComponent {
    
    constructor(public popoverController: PopoverController,
                private modalCtrl: ModalController){}
    
    async perfilModal(){
        const mPerfil = await this.modalCtrl.create({
            component: PerfilmodComponent,
            cssClass: 'small-modal'
        });
        await mPerfil.present();
    }

    close(){
        this.popoverController.dismiss();
    }
}