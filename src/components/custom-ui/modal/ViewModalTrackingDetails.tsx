import {ShippingStatusResponse} from "../../../core/model/responses";
import {MySwal} from "../../../index";
import {setEmailShipping} from "../../../core/service/ShippingStatusService";
import React from "react";
import {formatDate} from "../../../core/util/GeneralUtil";

const ViewModalTrackingDetails = (order: ShippingStatusResponse) => {
  const itemModalContentDetail = () => {
    return (!!order) ? `
        <div style="text-align: left; gap: 17px">
          <div>
            <strong>Envio completado?</strong> ${order.completo ? 'Si' : 'No'}<br />
          </div>
          <div>
            <strong>Origen: </strong> ${order._origen}<br />
          </div>
          <div>
            <strong>Destino: </strong> ${order._destino}<br />
          </div>
          <div>
            <strong>Fecha: </strong> ${formatDate(order.fecha)}<br />
          </div>
          <div>
            <strong>Contenido: </strong> ${order.contenido}<br />
          </div>
        </div>
               ` : ''
  }

  const detailTracking = () => {
    return (!!order.tracking && order.tracking.length !== 0) ?
      order.tracking.map(tracking => `
        <br />
        <div>
            <div>
              <strong>
                  ${(!!tracking.truck) ? 'Ultima parada...' : 'Ultimo embarque'}
              </strong>
            </div>
            <div>
              <strong>Fecha: </strong> ${formatDate(tracking.date)}
            </div>
        </div>
      `).join('') : '';
  }

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
        setEmailShipping({email, number: order.trackingNumber})
          .then(async response => {
            await MySwal.fire({
              icon: "success",
              title: <h2>Guardado correctamente.</h2>,
            });
            window.location.reload();
          }, () => {
            MySwal.showValidationMessage(`Vuela a intentarlo mas tarde.`);
          })
      },
      inputAttributes: {autocapitalize: "off"},
    });
  }

  return MySwal.fire({
    title: 'Detalle del envio',
    footer: (!!order.email) ? `<b>Correo: ${order.email}</a>` : '',
    html: itemModalContentDetail().concat(detailTracking()),

    showCancelButton: true,
    cancelButtonText: "Ok",
    showConfirmButton: !order.email,
    confirmButtonText: "Agregar un correo",
    preConfirm: async () => setEmailInOrder(),
  })
}

export default ViewModalTrackingDetails;
