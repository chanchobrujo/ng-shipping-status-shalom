import {FC} from "react";
import {HtmlInputProperties} from "../../core/model/properties";

export const CustomInput: FC<HtmlInputProperties> = (
  {
    type,
    label,
    value,
    placeholder,
    disabled,
    onChange,
    width,
    titleColor
  }
) => {
  const color: string = titleColor || 'black';
  return (
    <div
      style={{
        padding: '1.5% 0 1.5% 0'
      }}>
      <div
        style={{
          color,
          paddingBottom: '2%',
        }}>
        {label}
      </div>
      <input
        style={{
          width,
          color,
          outline: 'none',
          padding: '2% 2.5% 2% 2.5%',
        }}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  )
}
