import {Component, Input} from '@angular/core';
import {ShippingStatusResponse} from "../../../../core/models/response";
import {ModalService} from "../../../../core/service/ui/modal.service";
import {DetailTrackingComponent} from "../modal/detail-tracking/detail-tracking.component";
import {DeleteTrackingComponent} from "../modal/delete-tracking/delete-tracking.component";
import {SetEmailTrackingComponent} from "../modal/set-email-tracking/set-email-tracking.component";

@Component({
  selector: 'trackings-list',
  templateUrl: './trackings-list.component.html',
  styleUrls: ['./trackings-list.component.scss']
})
export class TrackingsListComponent {
  @Input() trackings: Array<ShippingStatusResponse> = [];

  constructor(private modalService: ModalService) {
  }

  async detail(tracking: ShippingStatusResponse) {
    const response = await this.modalService.modalConfirm(DetailTrackingComponent, {extraData: {tracking}});

    if (response) {
      this.modalService.hide();
      const response = await this.modalService.modalConfirm(SetEmailTrackingComponent, {extraData: {tracking}});
      if (!response) this.modalService.hide();
    } else this.modalService.hide();
  }

  async delete(tracking: ShippingStatusResponse) {
    const response = await this.modalService.modalConfirm(DeleteTrackingComponent, {extraData: {tracking}});
    if (!response) this.modalService.hide();
  }
}
