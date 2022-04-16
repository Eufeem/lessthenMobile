import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Register } from 'src/app/models/Register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  register: Register = new Register();

  constructor(
    private registerService: RegisterService,
    public alertController: AlertController
    ) { }

  ngOnInit() {

  }

  accept() {
    this.registerService.create(this.register).subscribe(response => {
      if (!response) {
        this.presentAlert("Alerta de Registro", "Registro Exitoso", "Se registro correctamente");
      } else {
        this.presentAlert("Alerta de Registro", "Registro Erroneo", "El correo ya se encuentra registrado");
      }
    });
  }

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
