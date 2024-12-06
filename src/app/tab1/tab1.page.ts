import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab1Page {
  text: string = '';

  constructor(private toastController: ToastController) { }

  test() {
    console.log("text", this.text);
  }

  async handleChange(e: any) {
    console.log("change", e.detail.value)
    const toast = await this.toastController.create({
      message: "Color changed successfully",
      duration: 1500,
      position: 'top',
    })

    await toast.present();
  }

}
