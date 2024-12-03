import {ModalOptions} from "ngx-bootstrap/modal";

export class ModalConstants {
  static modalGeneralConfig: ModalOptions = {
    class: 'modal-xs',
    ignoreBackdropClick: true,//cerrar con un click
    backdrop: true,           //sombra
    keyboard: false,
  };
  static modalFullScreenConfig: ModalOptions = {
    class: "portal-modal-carga",
    ignoreBackdropClick: false,
    keyboard: true,
    backdrop: true,
    animated: false
  };
}
