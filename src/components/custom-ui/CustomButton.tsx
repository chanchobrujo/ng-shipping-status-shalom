import React from "react";
import {ButtonProperties} from "../../model/properties";

function CustomButton(props: ButtonProperties) {
  return (
    <div style={{
      width: '100%',
      cursor: 'pointer',
      textAlign: 'center',
      borderRadius: '10%',
      backgroundColor: props.contentColor || 'white'
    }}>
      <h3 style={{
        color: props.titleColor
      }}>
        {props.title}
      </h3>
    </div>
  );
}

export default CustomButton;
