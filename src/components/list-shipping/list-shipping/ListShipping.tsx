import './ListShipping.css';
import React, {useEffect, useState} from "react";
import ItemListShipping from "../item-list-shipping/ItemListShipping";
import {ShippingStatusRequest} from "../../../core/model/request";


function ListShipping() {
  const [requests, setRequests] = useState<Array<ShippingStatusRequest>>([]);

  useEffect(() => {
    const trackings = localStorage.getItem("trackings");
    if (!!trackings) setRequests(JSON.parse(trackings) as Array<ShippingStatusRequest>);
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
        {requests.map((req: ShippingStatusRequest) => {
          return <ItemListShipping req={req} key={req.number}/>;
        })}
      </table>
    </div>
  )
}

export default ListShipping;
