import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SetEmailRequest, ShippingStatusRequest} from "../models/request";
import {BASE_URL} from "../constants/general-constants";
import {ShippingStatusResponse} from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class ShippingShalomService {

  constructor(private http: HttpClient) {
  }

  getTracking(request: ShippingStatusRequest) {
    return this.http.post<ShippingStatusResponse>(BASE_URL.concat("/states"), request);
  }

  setEmail(request: SetEmailRequest) {
    return this.http.put<any>(BASE_URL.concat("/set-email"), request);
  }
}
