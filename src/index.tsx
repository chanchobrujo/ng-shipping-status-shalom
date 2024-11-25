import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import FormInit from "./components/form-init/FormInit";
import ListShipping from "./components/list-shipping/ListShipping";

export const MySwal = withReactContent(Swal);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className={'content'}>
      <div className={'content-a'}>
        <FormInit/>
      </div>
      <div className={'content-b'}>
        <ListShipping/>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
