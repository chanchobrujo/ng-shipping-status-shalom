import React from "react";
import {ButtonProperties} from "../model/properties";

function CustomButton(props: ButtonProperties) {
  return (
    <div style={{
      borderRadius: '10%',
      width: '100%',
      cursor: 'pointer',
      textAlign: 'center',
      backgroundColor: props.contentColor || 'white'
    }}>
      <h2 style={{
        color: props.titleColor
      }}>
        {props.title}
      </h2>
    </div>
  );
}

export default CustomButton;
