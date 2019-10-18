import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Form,PageHeader} from 'antd'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Edit from './Components/Edit';
import Create from './Components/Create';
import Show from './Components/Show';
import Blogs from './Blogs';

const WrappedRegistrationForm = Form.create({ name: 'pedidos' })(App);
ReactDOM.render(
  <PageHeader  title="Terraker" subTitle="Realiza tu pedido" />,
  document.getElementById('Myheader')
);

ReactDOM.render(
  <Router>
    <div>
        <Route exact path='/' component={WrappedRegistrationForm}/>
        <Route path='/blogs/' component={Blogs}/>
        <Route path='/create/' component={Create}/>
        <Route path='/Show/:id' component={Show}/>
    </div>
  </Router>,
    document.getElementById('root')
);

/*const WrappedRegistrationForm = Form.create({ name: 'pedidos' })(App);
ReactDOM.render(
    <PageHeader  title="Terraker" subTitle="Realiza tu pedido" />,
    document.getElementById('Myheader')
  );
ReactDOM.render(<WrappedRegistrationForm />, document.getElementById('root'));
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
