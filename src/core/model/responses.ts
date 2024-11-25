interface PersonResponse {
  documento: string;
  nombre: string;
}

export interface ShippingStatusResponse {
  fecha: string;
  email?: string;
  completo: boolean;
  _origen: string;
  _destino: string;
  contenido: string;
  trackingNumber: string;
  remitente: PersonResponse;
  tracking: TrackingResponse[];
  //destinatario: Map<string, string>;
}

export interface TrackingResponse {
  date: string;
  truck: null | string;
}
