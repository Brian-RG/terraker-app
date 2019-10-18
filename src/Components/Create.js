import React from 'react';
import firebase from '../Firebase';
import {Link} from 'react-router-dom';

class Create extends React.Component {
    constructor(){
        super();
        this.ref = firebase.firestore().collection('boards');
        this.state={
            titulo: '',
            contenido: '',
            autor: '',
        };
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {titulo,contenido,autor} = this.state;

        this.ref.add(
            {
                autor,
                contenido,
                titulo
            }
        ).then((docRef) => {
            this.setState({
                titulo: '',
                contenido: '',
                autor: ''
            });
        this.props.history.push("/blogs");
        }).catch((error) =>{
            console.error("No se pudo agregar el blog: ",error);
        });
    }

    render(){
        const {titulo,contenido,autor} = this.state;
        return (
            <div className="container">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    ADD BOARD
                  </h3>
                </div>
                <div className="panel-body">
                  <h4><Link to="/blogs" className="btn btn-primary">Book List</Link></h4>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="title">Titulo:</label>
                      <input type="text" className="form-control" name="titulo" value={titulo} onChange={this.onChange} placeholder="Titulo" autoComplete="Off" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Contenido:</label>
                      <textarea className="form-control" name="contenido" onChange={this.onChange} placeholder="contenido" cols="80" rows="3" value={contenido}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="author">Autor:</label>
                      <input type="text" className="form-control" name="autor" value={autor} onChange={this.onChange} placeholder="Autor" autoComplete="Off"/>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          );
    }
    

}

export default Create;