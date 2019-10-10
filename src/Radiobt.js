import React from 'react'
import { Radio, Input } from 'antd';


const Options=[
  {"value":1,"option":"Chica (1 persona) - $150"},
  {"value":2,"option":"Mediana (2 personas) - $220"},
  {"value":3,"option":"Grande (3 personas) - $300"},
  {"value":4,"option":"Jumbo (4 personas) - $390"}
]

const Rb= ({style,val,option}) =>{
    return (
        <Radio style={style} value={val}>
          {option}
        </Radio>

    )
}

class Radiobt extends React.Component{
    constructor(props){
        super(props);
        this.options=props.options;
    }
  
    state = {
        value: 1,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
        
    
        
      };
    render(){
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
    
          return(
            <Radio.Group>
              {
                this.options.map(
                  (opt,i) =><Rb key={i} style={radioStyle} val={opt.value} option={opt.option}/>
                )
              }
            </Radio.Group>

          )
    }

}

export default Radiobt;

/*

class App extends React.Component {
<Radio style={radioStyle} value={1}>
          Option A
        </Radio>
        <Radio style={radioStyle} value={2}>
          Option B
        </Radio>
        <Radio style={radioStyle} value={3}>
          Option C
        </Radio>
        <Radio style={radioStyle} value={4}>
          More...
          {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>  

  

  render() {
    
    return (
      
    );
  }
}
*/