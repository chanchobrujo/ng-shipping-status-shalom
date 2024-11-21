import React, {useState} from "react";
import {InputProperties} from "../../model/properties";

function CustomInput(props: InputProperties) {
  const [value, setValue] = useState("")

  const handleChange = (event: any) => setValue(event.target.value)

  return (
    <div
      style={{
        padding: '1.5% 0 1.5% 0'
      }}>
      <div
        style={{
          paddingBottom: '1.5%',
          color: props.titleColor || 'black'
        }}>
        {props.title}
      </div>
      <input
        style={{
          outline: 'none',
          width: props.width,
          padding: '2% 2.5% 2% 2.5%',
          color: props.titleColor || 'black'
        }}
        type={props.inputType || 'text'}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default CustomInput;
