import {MySwal} from "../../../index";
import CustomButton from "../../custom-ui/CustomButton";
import React, {useEffect} from "react";
import {ShippingStatusResponse} from "../../../core/model/responses";
import {ShippingStatusRequest} from "../../../core/model/request";
import {getShippingStatus, setEmailShipping} from "../../../core/service/ShippingStatusService";

interface ItemListShippingProperties {
  req: ShippingStatusRequest;
}

function ItemListShipping({req}: ItemListShippingProperties) {
  const [order, setOrder] = React.useState<ShippingStatusResponse>();

  const itemModalContentDetail = (): string => {
    return (!!order) ? `
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
               ` : ''
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
          if (!!order) {
            setEmailShipping({email, number: order?.trackingNumber})
              .then(async response => {
                console.log(response)
                await MySwal.fire({
                  icon: "success",
                  title: <h2>Guardado correctamente.</h2>,
                });
              }, () => {
                MySwal.showValidationMessage(`Vuela a intentarlo mas tarde.`);
              })
          }
        },
        inputAttributes: {autocapitalize: "off"},
      });
    }

    return MySwal.fire({
      title: 'Detalle del envio',
      footer: (!!order && !!order.email) ? `<b>Correo: ${order.email}</a>` : '',
      html: itemModalContentDetail(),

      showCancelButton: true,
      cancelButtonText: "Ok",
      showConfirmButton: !!order && !order.email,
      confirmButtonText: "Agregar un correo",
      preConfirm: async () => setEmailInOrder(),
    })
  }

  useEffect(() => {
    async function fetchMyAPI() {
      setOrder((await getShippingStatus(req)).data);
    }

    fetchMyAPI();
  }, [req]);

  return (!!order) ? (
    <tbody>
    <tr>
      <td>
        <b>{req.number}</b>
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
  ) : (<></>)
}

export default ItemListShipping;
