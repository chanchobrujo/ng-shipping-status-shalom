import React from "react";
import {HtmlButtonProperties} from "../../model/properties";

function CustomButton({onClick, children, properties, ...props}: HtmlButtonProperties) {
  return (
    <button
      {...props}
      onClick={onClick}
      style={{
        width: '100%',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'center',
        borderRadius: '5%',
        backgroundColor: properties.contentColor || 'white'
      }}>
      <h4
        style={{
          color: properties.titleColor
        }}>
        {properties.title}
      </h4>
    </button>
  );
}

export default CustomButton;
