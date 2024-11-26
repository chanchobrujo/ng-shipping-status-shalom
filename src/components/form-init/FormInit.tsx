import React, {ChangeEvent, useState} from 'react';
import CustomButton from "../custom-ui/CustomButton";
import {CustomInput} from "../custom-ui/CustomInput";
import {ShippingStatusRequest} from "../../core/model/request";

function FormInit() {
  const padding: string = '3.5% 5% 3.5% 5%';

  const [code, setCode] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.value);
  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value);

  const saveOrder = () => {
    if (!!code && !!number) {
      let list: Array<ShippingStatusRequest>;
      const order = {code, number};
      const trackings = localStorage.getItem("trackings");
      if (!!trackings) {
        list = JSON.parse(trackings) as Array<ShippingStatusRequest>;
        const flag = !list.find(c => c.number === order.number);
        if (flag) {
          list.push(order);
        } else {
        }
      } else {
        list = [order];
      }
      localStorage.setItem("trackings", JSON.stringify(list));
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }

  return (
    <>
      <div style={{width: '100%'}}>
        <div style={{
          padding: '.5%',
          textAlign: 'center',
          backgroundColor: '#ee2a2f',
        }}>
          <h1 style={{color: 'white'}}>
            Ingresar numero de seguimiento y codigo.
          </h1>
        </div>
        <div style={{padding}}>
          <p>
            Ingresa los datos de tu pedido shalom, te mostraremos su ruta actual, e iremos notificando el
            trayecto del mismo, via email.
          </p>
        </div>
        <div style={{padding}}>
          <CustomInput
            width={'90%'}
            type="number"
            value={number}
            label="Numero de seguimiento"
            onChange={handleNumberChange}
            placeholder="Por favor ingresa tu numero de seguimiento"
          />
          <CustomInput
            width={'20%'}
            type="text"
            value={code}
            label="Codigo de seguimiento"
            onChange={handleCodeChange}
            placeholder="Por favor ingresa tu codigo de seguimiento"
          />
        </div>
        <div style={{
          gap: '5%',
          display: 'flex',
          padding: '2% 5% 2% 5%',
          backgroundColor: 'white',
        }}>
          <CustomButton
            onClick={saveOrder}
            properties={{
              title: 'Guardar',
              titleColor: 'white',
              contentColor: '#ee2a2f'
            }}
          />
          <CustomButton
            onClick={() => {
              setCode("");
              setNumber("");
            }}
            properties={{
              title: 'Limpiar',
              titleColor: '#ee2a2f',
              contentColor: 'white'
            }}
          />
        </div>
      </div>
    </>
  );
}

export default FormInit;
