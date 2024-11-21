import React from 'react';
import './App.css';
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";

function InitForm() {
  return (
    <div style={{
      width: '20%'
    }}>
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

export default InitForm;
