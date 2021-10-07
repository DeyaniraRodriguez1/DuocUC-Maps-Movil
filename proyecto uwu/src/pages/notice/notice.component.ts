import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../popover/popover.component";

@Component({
    selector: 'notice',
    templateUrl: './notice.component.html',
    styleUrls: ['notice.component.css']
})
export class NoticeComponent {

    aviso = [{id:1,titulo:'No hay clases', des:'Estimados, alumnos el dia lunes 11 de octubre no hay clases'},{ id:2, titulo: 'Recordatorio Prueba', des: 'Recuerden que este jueves hay prueba de ionic'}];

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
        this.aviso.push({id:3, titulo:'Push',des:'refrsheado'},{id:4,titulo:'Otro anuncio',des:'testeo de anuncio descriptivo'},{id:5,titulo:'Renovar TNE',des:'No olviden de renovar su tne para que no tengan que pagar 700 pesos de pasaje uwu'})
        event.target.complete();
        },2000);
    }
    
}