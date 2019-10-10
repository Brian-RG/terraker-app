import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Col,
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Radio,
  Row,
  PageHeader,
} from 'antd';
import 'antd/dist/antd.css'
import Radiobt from './Radiobt';
import RadioGroup from 'antd/lib/radio/group';

const { Option } = Select;

class App extends React.Component{
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });};
  
  
  render(){    
    const Options=[
      {"value":1,"option":"Chica (1 persona) - $150"},
      {"value":2,"option":"Mediana (2 personas) - $220"},
      {"value":3,"option":"Grande (3 personas) - $300"},
      {"value":4,"option":"Jumbo (4 personas) - $390"}
    ]

    const plainOptions=[
      'Quiero todos',
      'Acelga',
      'Aguacate',
      'Betabel',
      'Cebolla',
      'Col',
      'Coliflor',     
      'Chícharo',
      'Chile poblano',
      'Chile verde',
      'Ejote',
      'Elote',
      'Espinaca',
      'Jitomate',
      'Lechuga',
      'Papa',
      'Pepino',
      'Tomate',
      'Zanahoria'
    ]

    const Cb = ({option,colspan}) =>{
      return(
        <Row>
          <Col span={colspan}>
            <Checkbox value={option}> {option} </Checkbox>
          </Col>
        </Row>
      )
    } 
    

    const Rb= ({style,val,option}) =>{
      return (
          <Radio style={style} value={val}>
            {option}
          </Radio>
  
      )
  }

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '52',
    })(
      <Select style={{ width: 70 }}>
        <Option value="52">+52</Option>
      </Select>,
    );

      
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        
        <Row>
          <Col span={8}></Col>
          <Col span={6}>
          <span>Nombre&nbsp;:</span>
        <Form.Item
              
        >
          {getFieldDecorator('Nombre', {
            rules: [{ required: true, message: 'Campo requerido'}],
          })(<Input style={{width:'100%'}}/>)}
        </Form.Item>
        </Col>
        </Row>

        <Row>
          <Col span={8}></Col>
          <Col span={8}>
          <span>Número Telefónico&nbsp;:</span>
        <Form.Item >
          {getFieldDecorator('telefono', {
            rules: [{ required: true, message: 'Por favor ingrese su número de teléfono' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        </Col>
        </Row>
        
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <p>Tamaño de tu terrabox (1 semana)</p>
            <Form.Item >
              {getFieldDecorator('caja',{
                rules:[{required:true,message:'Por favor elige una opción.'}],
              })( <RadioGroup>
              {
              Options.map( (opt,i) => <Rb key={i} style={radioStyle} val={opt.value} option={opt.option}/> )
              }
              </RadioGroup>
              )
              }
            </Form.Item>
          </Col>
        </Row>


        <Row>
          <Col span={8}></Col>
          <Col span={8}>      
                <p>Elige los productos que no quieras en tu Terrabox (Estos serán repuestos con otros productos de tu agrado)</p>
                <Form.Item >
                  {getFieldDecorator('productos-eliminados',{rules:[{required:true,message:'Elige al menos una opción'}], })
                  (
                  <Checkbox.Group style={{ width: '100%' }}>
                  {
                    plainOptions.map(
                      (options,i) => <Cb key={i} option={options} span={8}/>
                    )
                  }
                  </Checkbox.Group>
                    
                  )
                  }
                </Form.Item>
            </Col>
        </Row>

        <Row>
          <Col span={8}></Col>
          <Col span={8}>
          <span>¿Antojo de algo que no aparece en la lista? (Lentejas,avena,fruta,etc.)&nbsp;:</span>
        <Form.Item >
          {getFieldDecorator('antojo')
          (<Input style={{ width: '100%' }} />)
          }
        </Form.Item>
        </Col>
        </Row>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Enviar pedido
          </Button>
        </Form.Item>

        
      </Form>
      );
  }
}

export default App;

/*


Accept agree terms '''<Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>


class RegistrationForm extends React.Component {
  

  

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };



  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    


    return (
      
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

ReactDOM.render(<WrappedRegistrationForm />, mountNode);
*/
