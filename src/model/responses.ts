export interface ShippingStatusResponse {
  fecha: Date;
  completo: boolean;
  _origen: string;
  _destino: string;
  contenido: string;
  trackingNumber: string;
  tracking: TrackingResponse[];
  remitente: PersonResponse;
  //destinatario: Map<string, string>;
}

export interface PersonResponse {
  documento: string;
  nombre: string;
}

export interface TrackingResponse {
  truck: null | string;
  date: Date;
}
