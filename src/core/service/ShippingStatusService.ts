import {BASE_URL} from "../constant/GeneralConstant";
import axios from "axios";
import {ShippingStatusResponse} from "../model/responses";
import {SetEmailRequest, ShippingStatusRequest} from "../model/request";

export const getShippingStatus = (request: ShippingStatusRequest) => {
  return axios.post<ShippingStatusResponse>(BASE_URL.concat("/states"), request);
}

export const setEmailShipping = (request: SetEmailRequest) => {
  return axios.put<ShippingStatusResponse>(BASE_URL.concat("/set-email"), request);
}
