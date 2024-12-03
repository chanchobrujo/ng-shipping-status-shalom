import {Injectable} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {ModalConstants} from "../../constants/modal-constants";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private bsModalService: BsModalService, public bsModalRef: BsModalRef) {
  }

  showAsync(content: any, config?: ModalOptions) {
    return new Promise<boolean>((resolve, reject) => {
      this.bsModalRef = this.bsModalService.show(content, {...config});
      if (this.bsModalRef.content && this.bsModalRef.content.onDismiss) {
        this.bsModalRef.content.onDismiss.subscribe((value: any) => resolve(value));
      } else if (this.bsModalRef.content && this.bsModalRef.content.onConfirm) {
        this.bsModalRef.content.onConfirm.subscribe((value: any) => resolve(value));
      } else if (this.bsModalRef.content && this.bsModalRef.content.onNotification) {
        this.bsModalRef.content.onNotification.subscribe((value: any) => resolve(value));
      } else if (this.bsModalRef.content && this.bsModalRef.content.onSelectedOption) {
        this.bsModalRef.content.onSelectedOption.subscribe((value: any) => resolve(value));
      }
    });
  }

  modalConfirm(content: any, initialState?: any) {
    return new Promise<boolean>(async (resolve, reject) => {
      const value = await this.showAsync(content, {...ModalConstants.modalGeneralConfig, initialState});
      resolve(value);
    });
  }

  hide(): void {
    this.bsModalRef.hide();
  }
}
