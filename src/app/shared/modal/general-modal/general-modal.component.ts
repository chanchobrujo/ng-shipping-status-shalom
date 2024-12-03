import {Component} from '@angular/core';
import {ModalOptions} from "ngx-bootstrap/modal";
import {ModalProperties} from "../../../core/models/ui/dto";
import {Subject} from "rxjs";

@Component({
  selector: 'general-modal',
  templateUrl: './general-modal.component.html',
  styleUrls: ['./general-modal.component.scss']
})
export class GeneralModalComponent {
  public properties: ModalProperties = {title: ''};
  public onConfirm: Subject<any> = new Subject<any>();

  constructor(public options: ModalOptions) {
    const state = (this.options.initialState as { properties: ModalProperties });
    this.properties = state.properties;
  }

  close() {
    this.onConfirm.next(false);
  }

}
