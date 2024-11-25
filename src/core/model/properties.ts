import React, {ChangeEvent} from "react";

interface ButtonProperties {
  title: string;
  titleColor: string;
  contentColor?: string;
}

export interface HtmlButtonProperties {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
  properties: ButtonProperties;
}

export interface HtmlInputProperties {
  width: string;
  textColor?: string;
  titleColor?: string;
  contentColor?: string;

  label: string;
  disabled?: boolean;
  placeholder: string;
  value: string | number;
  type: 'text' | 'number' | 'email' | 'password';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
