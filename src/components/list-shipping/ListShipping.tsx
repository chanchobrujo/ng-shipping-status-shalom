import './ListShipping.css';
import CustomButton from "../custom-ui/CustomButton";
import {useEffect, useState} from "react";
import {ShippingStatusResponse} from "../../model/responses";

interface ItemListShippingProperties {
  order: ShippingStatusResponse;
}

function ListShipping() {
  const [orders, setOrders] = useState<Array<ShippingStatusResponse>>([]);

  useEffect(() => {
    const r1: ShippingStatusResponse = {
      "completo": true,
      "_origen": "AV. PRIMAVERA 120, LIMA, LIMA",
      "_destino": "ANCÓN SANTA ROSA, LIMA, LIMA",
      "trackingNumber": "35016071",
      "contenido": "1 MINI PAQUETERIA XS",
      "fecha": new Date(),
      "remitente": {
        "documento": "76228830",
        "nombre": "HANS ROBIN ZOEGER GUEVARA"
      },
      "tracking": [
        {
          "truck": "480027",
          "date": new Date()
        },
        {
          "truck": null,
          "date": new Date()
        }
      ]
    };
    const r2: ShippingStatusResponse = {
      "completo": false,
      "_origen": "AV. PRIMAVERA 120, LIMA, LIMA",
      "_destino": "ANCÓN SANTA ROSA, LIMA, LIMA",
      "trackingNumber": "35016072",
      "contenido": "1 MINI PAQUETERIA XS",
      "fecha": new Date(),
      "remitente": {
        "documento": "76228830",
        "nombre": "HANS ROBIN ZOEGER GUEVARA"
      },
      "tracking": [
        {
          "truck": "480027",
          "date": new Date()
        },
        {
          "truck": null,
          "date": new Date()
        }
      ]
    };
    //setOrders([...orders, ...[r1, r2]]);
    setOrders([r1, r2]);
  }, []);

  function ItemListShipping(props: ItemListShippingProperties) {
    return (
      <tbody>
      <tr>
        <td>
          <b>{props.order.trackingNumber}</b>
        </td>
        <td>{props.order._destino}</td>
        <td>{props.order.remitente.nombre}</td>
        <td>{props.order.fecha.toString()}</td>
        <td>
          {props.order.completo ? 'Si' : 'No'}
        </td>
        <td>
          <CustomButton title={'Ver detalle'} titleColor={'#ee2a2f'}/>
        </td>
      </tr>
      </tbody>
    )
  }

  return (
    <div style={{
      backgroundColor: 'white'
    }}>
      <table style={{
        width: '100%'
      }}>
        <thead>
        <tr>
          <th>Numero de seguimiento</th>
          <th>Origen</th>
          <th>Remitente</th>
          <th>Fecha</th>
          <th>Envio completado?</th>
          <th></th>
        </tr>
        </thead>
        {orders.map((order: ShippingStatusResponse) => <ItemListShipping order={order} key={order.trackingNumber}/>)}
      </table>
    </div>
  )
}

export default ListShipping;
