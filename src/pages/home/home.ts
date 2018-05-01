import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cpf : number;
  public readonly CPF: string = 'CPF'
  public readonly CPF_LENGTH: number = 11;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.initCpf();
  }

  public confirmar(cpf: number): void {
    let alertImprimindo = this.alertCtrl.create({
      title: "Imprimindo..."
    });
    alertImprimindo.present()
      .then( () => {
        setTimeout(() => {
          alertImprimindo.dismiss();
          this.initCpf();
        }, 2000);
      })
      .catch( () => {
        alertImprimindo.dismiss();
      })
  }

  public updateCpf(cpf: number): void {    
    this.cpf = cpf;
  }

  private initCpf(): void {
    this.cpf = 0;
  }

}