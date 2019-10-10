import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Form,PageHeader} from 'antd'



const WrappedRegistrationForm = Form.create({ name: 'pedidos' })(App);
ReactDOM.render(
    <PageHeader  title="Terraker" subTitle="Realiza tu pedido" />,
    document.getElementById('Myheader')
  );
ReactDOM.render(<WrappedRegistrationForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
