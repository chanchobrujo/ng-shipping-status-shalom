import React from 'react';
import CustomButton from "../custom-ui/CustomButton";
import CustomInput from "../custom-ui/CustomInput";

function FormInit() {
  return (
    <div style={{width: '100%'}}>
      <div style={{
        padding: '.5%',
        textAlign: 'center',
        backgroundColor: '#ee2a2f',
      }}>
        <h1 style={{
          color: 'white'
        }}>
          Ingresar numero de seguimiento y codigo.
        </h1>
      </div>
      <div style={{
        padding: '3.5% 5% 3.5% 5%'
      }}>
        <p>
          Ingresa los datos de tu pedido shalom, te mostraremos la ruta actual de tu pedido, e iremos notificando el
          trayecto del mismo, via email.
        </p>
      </div>
      <div style={{
        padding: '3.5% 5% 3.5% 5%'
      }}>
        <CustomInput width={'80%'} title={'Correo para enviar notificaciones'} inputType={'email'}/>
        <CustomInput width={'80%'} title={'Numero de seguimiento'} inputType={'number'}/>
        <CustomInput width={'30%'} title={'Codigo'}/>
      </div>
      <div style={{
        gap: '5%',
        display: 'flex',
        padding: '2% 5% 2% 5%',
        backgroundColor: 'white',
      }}>
        <CustomButton title="Guardar" titleColor="white" contentColor="#ee2a2f"/>
        <CustomButton title="Limpiar" titleColor="#ee2a2f" contentColor="white"/>
      </div>
    </div>
  );
}

export default FormInit;
