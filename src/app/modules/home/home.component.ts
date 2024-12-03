import {Component, OnInit} from '@angular/core';
import {ShippingStatusRequest} from "../../core/models/request";
import {ShippingStatusResponse} from "../../core/models/response";
import {ShippingShalomService} from "../../core/service/shipping-shalom.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public trackings: Array<ShippingStatusResponse> = [];

  constructor(private shippingShalomService: ShippingShalomService) {
  }

  ngOnInit(): void {
    const localSaveTrackings = localStorage.getItem('trackings');
    if (!!localSaveTrackings) {
      const list: Array<ShippingStatusRequest> = JSON.parse(localSaveTrackings) as Array<ShippingStatusRequest>;
      list.forEach((request: ShippingStatusRequest) => {
        this.shippingShalomService
          .getTracking(request)
          .subscribe(response => {
              this.trackings.push(response)
            },
            error => console.log(error));
      })
    }
  }
}
