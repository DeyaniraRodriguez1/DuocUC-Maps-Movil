import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../popover/popover.component";

@Component({
    selector: 'notice',
    templateUrl: './notice.component.html',
    styleUrls: ['notice.component.css']
})
export class NoticeComponent {

    aviso = [{titulo:'No hay clases', des:'alumnos el dia lunes 11 de octubre no hay clases'},{ titulo: 'Recordatorio Prueba', des: 'Recuerden que este jueves hay prueba de ionic'}];

    constructor(public popoverController: PopoverController){}

    async popclick(event){
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            event
        });
        return await popover.present();
    }

    doRefresh(event){

        setTimeout(()=>{
        event.complete();
        },2000);
    }
    
}