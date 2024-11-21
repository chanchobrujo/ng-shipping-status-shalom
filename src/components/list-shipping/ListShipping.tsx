import './ListShipping.css';
import CustomButton from "../custom-ui/CustomButton";
import React, {useEffect, useState} from "react";
import {ShippingStatusResponse} from "../../model/responses";
import {MySwal} from "../../index";

interface ItemListShippingProperties {
  order: ShippingStatusResponse;
}

function ListShipping() {
  const [orders, setOrders] = useState<Array<ShippingStatusResponse>>([]);

  useEffect(() => {
    const r1: ShippingStatusResponse = {
      "email": 'gaaa@gmail.com',
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

  function ItemListShipping({order}: ItemListShippingProperties) {
    const itemModalContentDetail = (): string => {
      return `
        <div style="text-align: left; gap: 17px">
          <div>
            <strong>Envio completado?</strong> ${order.completo ? 'Si' : 'No'}, <br />
          </div>
          <div>
            <strong>Origen: </strong> ${order._origen}, <br />
          </div>
          <div>
            <strong>Destino: </strong> ${order._destino}, <br />
          </div>
          <div>
            <strong>Fecha: </strong> ${order.fecha}, <br />
          </div>
          <div>
            <strong>Contenido: </strong> ${order.contenido}, <br />
          </div>
        </div>
               `
    }

    const viewModalDetails = () => {
      const setEmailInOrder = () => {
        MySwal.fire({
          input: "text",
          icon: "info",
          title: <h3>Ingresa tu correo</h3>,

          showConfirmButton: true,
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          confirmButtonText: "Guardar",
          showLoaderOnConfirm: true,

          allowOutsideClick: () => MySwal.isLoading(),
          preConfirm: async (email) => {
            try {
              await MySwal.fire({
                icon: "success",
                title: <h2>Guardado correctamente.</h2>,
              });
            } catch (error) {
              MySwal.showValidationMessage(`Vuela a intentarlo mas tarde.`);
            }
          },
          inputAttributes: {autocapitalize: "off"},
        });
      }

      return MySwal.fire({
        title: 'Detalle del envio',
        footer: (!!order.email) ? `<b>Correo: ${order.email}</a>` : '',
        html: itemModalContentDetail(),

        showCancelButton: true,
        cancelButtonText: "Ok",
        showConfirmButton: !order.email,
        confirmButtonText: "Agregar un correo",
        preConfirm: async () => setEmailInOrder(),
      })
    }

    return (
      <tbody>
      <tr>
        <td>
          <b>{order.trackingNumber}</b>
        </td>
        <td>{order._destino}</td>
        <td>{order.remitente.nombre}</td>
        <td>{order.fecha}</td>
        <td>
          {order.completo ? 'Si' : 'No'}
        </td>
        <td>
          <CustomButton
            onClick={() => viewModalDetails()}
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
