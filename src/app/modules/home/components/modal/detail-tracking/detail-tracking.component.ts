import {Component} from '@angular/core';
import {ShippingStatusResponse} from "../../../../../core/models/response";
import {ModalOptions} from "ngx-bootstrap/modal";
import {Subject} from "rxjs";

@Component({
  selector: 'detail-tracking',
  templateUrl: './detail-tracking.component.html',
  styleUrls: ['./detail-tracking.component.scss']
})
export class DetailTrackingComponent {
  /*
  public modal: ModalDto | undefined = undefined;
  @Output() eventoEnviarRespuestaModal = new EventEmitter<string>();
   */

  public tracking: ShippingStatusResponse | null = null;
  public onConfirm: Subject<any> = new Subject<any>();

  constructor(public options: ModalOptions) {
    const state = (this.options.initialState as { extraData: any });
    this.tracking = state.extraData['tracking'];
  }

  addEmail() {
    this.onConfirm.next(true);
  }

  close() {
    this.onConfirm.next(false);
  }
}
