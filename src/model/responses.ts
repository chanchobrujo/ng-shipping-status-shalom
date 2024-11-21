export interface ShippingStatusResponse {
  fecha: string;
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
  date: string;
  truck: null | string;
}
