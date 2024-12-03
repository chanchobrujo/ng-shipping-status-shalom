import {Component} from '@angular/core';
import {ModalService} from "../../../../../core/service/ui/modal.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShippingShalomService} from "../../../../../core/service/shipping-shalom.service";
import {ModalOptions} from "ngx-bootstrap/modal";
import {ShippingStatusResponse} from "../../../../../core/models/response";
import {Subject} from "rxjs";

@Component({
  selector: 'set-email-tracking',
  templateUrl: './set-email-tracking.component.html',
  styleUrls: ['./set-email-tracking.component.scss']
})
export class SetEmailTrackingComponent {
  public form: FormGroup;
  public tracking: ShippingStatusResponse | null = null;
  public onConfirm: Subject<boolean> = new Subject<boolean>();

  constructor(public options: ModalOptions, public modalService: ModalService, private shippingShalomService: ShippingShalomService) {
    this.form = new FormGroup({});
    this.form.addControl('email', new FormControl('', {validators: [Validators.required, Validators.email]}));

    const state = (this.options.initialState as { extraData: any });
    this.tracking = state.extraData['tracking'];
  }

  save() {
    if (!!this.tracking && this.form.valid) {
      this.shippingShalomService.setEmail({
        email: this.form.get('email')?.value,
        number: this.tracking.trackingNumber
      }).subscribe(response => {

        console.log(response);
        location.reload();

      }, (err) => {
        //hacer algo
        console.error(err);
        location.reload();

      });
    }
  }

  close() {
    this.onConfirm.next(false)
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }
}
