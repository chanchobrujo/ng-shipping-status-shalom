import './ListShipping.css';
import CustomButton from "../custom-ui/CustomButton";
import React, {useEffect, useState} from "react";
import {ShippingStatusResponse} from "../../model/responses";
import {MySwal} from "../../index";
import {ShippingStatusRequest} from "../../model/request";

interface ItemListShippingProperties {
  order: ShippingStatusResponse;
}

function ListShipping() {
  const [orders, setOrders] = useState<Array<ShippingStatusResponse>>([]);

  useEffect(() => {
    let list: Array<ShippingStatusRequest>;
    const trackings = localStorage.getItem("trackings");
    if (!!trackings) {
      list = JSON.parse(trackings) as Array<ShippingStatusRequest>;

    }
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
    <div className={'content-table'}>
      <table className={'style-table'}>
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
