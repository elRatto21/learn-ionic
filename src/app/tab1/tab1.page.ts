import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class Tab1Page {
  text: string = '';
  size: string = '5';
  color: string = 'black';

  constructor(private toastController: ToastController) { }

  calcSize() {
    return (8 * Number(this.size)) + "px"
  }

  async sendToast(e: any) {
    const toast = await this.toastController.create({
      message: `Changed text color to ${e.detail.value}.`,
      duration: 1500,
      position: 'top'
    })

    await toast.present();
  }
}
