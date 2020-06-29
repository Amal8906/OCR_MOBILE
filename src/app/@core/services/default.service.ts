import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor( 
    public toastController: ToastController,
    ) { }

public removeNullElement(jsonData: any){
    let newJson ={};
    for(let key of Object.keys(jsonData)){
      if(jsonData[key]){
        newJson[key]= jsonData[key];
      }
    }
    return newJson;
}


public async presentToast(message: string, duration: number) {
  let toastOption = {
    message: message,
    duration: duration ? duration : 2000
  }
  const toast = await this.toastController.create(toastOption);
  toast.present();
}




}
