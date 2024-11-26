import CustomButton from "../../custom-ui/CustomButton";
import React, {useEffect} from "react";
import {ShippingStatusResponse} from "../../../core/model/responses";
import {ShippingStatusRequest} from "../../../core/model/request";
import {getShippingStatus} from "../../../core/service/ShippingStatusService";
import ViewModalTrackingDetails from "../../custom-ui/modal/ViewModalTrackingDetails";
import {formatDate} from "../../../core/util/GeneralUtil";

interface ItemListShippingProperties {
  req: ShippingStatusRequest;
}

function ItemListShipping({req}: ItemListShippingProperties) {
  const [order, setOrder] = React.useState<ShippingStatusResponse>();

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
      <td>{formatDate(order.fecha)}</td>
      <td>
        {order.completo ? 'Si' : 'No'}
      </td>
      <td>
        <CustomButton
          onClick={() => ViewModalTrackingDetails(order)}
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
