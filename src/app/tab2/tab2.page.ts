import { Component, NgZone, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { BatteryInfo, Device } from '@capacitor/device';
import { ConnectionStatus, ConnectionType, Network } from '@capacitor/network';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class Tab2Page implements OnInit {

  constructor(private ngZone: NgZone) {
  }

  battery: number | undefined = undefined
  loading: string | undefined = undefined

  networkConnected: boolean | undefined = undefined
  networkType: string | undefined = undefined

  Math = Math;

  async reload(e: any) {
    this.battery = (await Device.getBatteryInfo()).batteryLevel
    this.loading = (await Device.getBatteryInfo()).isCharging ? "Loading" : "Not loading"
    this.networkType = (await Network.getStatus()).connectionType
    this.networkConnected = (await Network.getStatus()).connected

    e ? e.target.complete() : null
  }

  async getBadgeColor() {
    return "warning"
  }

  getNetTypeIcon() {
    switch (this.networkType) {
      case "wifi":
        return "wifi-outline"
      case "cellular":
        return "cellular-outline"
      case "unknown":
        return "help-circle-outline"
      default:
        return "close-circle-outline"
    }
  }

  ngOnInit() {
    this.reload(null);

    Network.addListener('networkStatusChange', status => {
      this.ngZone.run(() => {
        this.networkConnected = status.connected
        this.networkType = status.connectionType
        console.log("status", status.connected)
      })
    })
  }

}
