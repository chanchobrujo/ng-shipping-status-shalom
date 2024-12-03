import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShippingStatusRequest} from "../../../../core/models/request";
import {ModalService} from "../../../../core/service/ui/modal.service";
import {GeneralModalComponent} from "../../../../shared/modal/general-modal/general-modal.component";
import {ModalProperties} from "../../../../core/models/ui/dto";

@Component({
  selector: 'form-init',
  templateUrl: './form-init.component.html',
  styleUrls: ['./form-init.component.scss']
})
export class FormInitComponent {
  public form: FormGroup;

  constructor(private modalService: ModalService) {
    this.form = new FormGroup({});
    this.form.addControl('code', new FormControl('', {validators: this.builderValidator(4, 4)}));
    this.form.addControl('tracking', new FormControl('', {validators: this.builderValidator(8, 8)}));
  }

  async save() {
    if (this.form.valid) {
      const code = this.form.get("code")?.value;
      const number = this.form.get("tracking")?.value;
      const order: ShippingStatusRequest = {
        code,
        number
      }

      let list: Array<ShippingStatusRequest>;
      const trackings = localStorage.getItem("trackings");
      if (!!trackings) {
        list = JSON.parse(trackings) as Array<ShippingStatusRequest>;
        const flag = !list.find(c => c.number === order.number);
        if (flag) list.push(order);
      } else list = [order];
      localStorage.setItem("trackings", JSON.stringify(list));
      location.reload();
    } else {
      const properties: ModalProperties = {title: 'Error', message: 'Porfavor ingresa los datos correctamente.'};
      const response = await this.modalService.modalConfirm(GeneralModalComponent, {properties});
      if (!response) this.modalService.hide();
    }
  }

  clear() {
    this.form.get("code")?.reset();
    this.form.get("tracking")?.reset();
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  private builderValidator(min: number, max: number) {
    return [Validators.required, Validators.minLength(min), Validators.maxLength(max)];
  }
}
