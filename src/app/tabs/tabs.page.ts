import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, informationCircleOutline, documentTextOutline, cloudOutline, checkmarkCircleOutline, alertCircleOutline, closeCircleOutline, helpCircleOutline, cellularOutline, wifiOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({
      documentTextOutline,
      informationCircleOutline,
      cloudOutline,
      checkmarkCircleOutline,
      alertCircleOutline,
      closeCircleOutline,
      helpCircleOutline,
      cellularOutline,
      wifiOutline
    });
  }
}
