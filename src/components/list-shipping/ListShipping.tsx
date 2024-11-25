import './ListShipping.css';
import React, {useEffect, useState} from "react";
import {ShippingStatusResponse} from "../../model/responses";
import {ShippingStatusRequest} from "../../model/request";
import ItemListShipping from "./item-list-shipping/ItemListShipping";


function ListShipping() {
  const [orders, setOrders] = useState<Array<ShippingStatusResponse>>([]);

  useEffect(() => {
    let list: Array<ShippingStatusRequest>;
    const trackings = localStorage.getItem("trackings");
    if (!!trackings) {
      list = JSON.parse(trackings) as Array<ShippingStatusRequest>;

    }
  }, []);

  return (
    <div className={'content-table'}>
      <table className={'style-table'}>
        <thead>
        <tr>
          <th>Numero de seguimiento</th>
          <th>Origen</th>
          <th>Remitente</th>
          <th>Fecha</th>
          <th>Envio completado?</th>
          <th>Acciones</th>
        </tr>
        </thead>
        {orders.map((order: ShippingStatusResponse) => <ItemListShipping order={order} key={order.trackingNumber}/>)}
      </table>
    </div>
  )
}

export default ListShipping;
