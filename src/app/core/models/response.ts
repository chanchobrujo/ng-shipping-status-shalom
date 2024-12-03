export interface ShippingStatusResponse {
  fecha: Date;
  email?: string;
  completo: boolean;
  _origen: string;
  _destino: string;
  contenido: string;
  trackingNumber: string;
  remitente: PersonResponse;
  tracking: Array<TrackingResponse>;
  //destinatario: Map<string, string>;
}

export interface TrackingResponse {
  date: Date;
  message: string;
}

interface PersonResponse {
  documento: string;
  nombre: string;
}
