import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
    selector: 'perfilmod',
    templateUrl: './perfilmod.component.html',
    styleUrls: ['./perfilmod.component.css']
})
export class PerfilmodComponent {

    constructor(private modalCtrl: ModalController){}

    dismiss(){
        this.modalCtrl.dismiss();
    }
    
}