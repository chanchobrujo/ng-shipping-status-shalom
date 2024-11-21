import './ListShipping.css';
import CustomButton from "../custom-ui/CustomButton";
import {CSSProperties, useEffect, useState} from "react";
import {ShippingStatusResponse} from "../../model/responses";

interface ItemListShippingProperties {
  order: ShippingStatusResponse;
}

function ListShipping() {
  const rowStyles: CSSProperties = {
    width: '150px',
    wordWrap: 'break-word'
  }
  const [orders, setOrders] = useState<Array<ShippingStatusResponse>>([]);

  useEffect(() => {
    const r1: ShippingStatusResponse = {
      "completo": true,
      "_origen": "AV. PRIMAVERA 120, LIMA, LIMA",
      "_destino": "ANCÓN SANTA ROSA, LIMA, LIMA",
      "trackingNumber": "35016071",
      "contenido": "1 MINI PAQUETERIA XS",
      "fecha": '20/20/2024',
      "remitente": {
        "documento": "76228830",
        "nombre": "HANS ROBIN ZOEGER GUEVARA"
      },
      "tracking": [
        {
          "truck": "480027",
          "date": '20/20/2024'
        },
        {
          "truck": null,
          "date": '20/20/2024'
        }
      ]
    };
    const r2: ShippingStatusResponse = {
      "completo": false,
      "_origen": "AV. PRIMAVERA 120, LIMA, LIMA",
      "_destino": "ANCÓN SANTA ROSA, LIMA, LIMA",
      "trackingNumber": "35016072",
      "contenido": "1 MINI PAQUETERIA XS",
      "fecha": '20/20/2024',
      "remitente": {
        "documento": "76228830",
        "nombre": "HANS ROBIN ZOEGER GUEVARA"
      },
      "tracking": [
        {
          "truck": "480027",
          "date": '20/20/2024'
        },
        {
          "truck": null,
          "date": '20/20/2024'
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
        <td style={rowStyles}>
          <b>{props.order.trackingNumber}</b>
        </td>
        <td style={rowStyles}>{props.order._destino}</td>
        <td style={rowStyles}>{props.order.remitente.nombre}</td>
        <td style={rowStyles}>{props.order.fecha}</td>
        <td style={rowStyles}>
          {props.order.completo ? 'Si' : 'No'}
        </td>
        <td style={rowStyles}>
          <CustomButton
            onClick={() => console.log("Ver detalle")}
            properties={{
              title: 'Detalle',
              titleColor: '#ee2a2f',
            }}
          />
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
        width: '100%',
        tableLayout: 'fixed'
      }}>
        <thead>
        <tr>
          <th style={rowStyles}>Numero de seguimiento</th>
          <th style={rowStyles}>Origen</th>
          <th style={rowStyles}>Remitente</th>
          <th style={rowStyles}>Fecha</th>
          <th style={rowStyles}>Envio completado?</th>
          <th style={rowStyles}></th>
        </tr>
        </thead>
        {orders.map((order: ShippingStatusResponse) => <ItemListShipping order={order} key={order.trackingNumber}/>)}
      </table>
    </div>
  )
}

export default ListShipping;
