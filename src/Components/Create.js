import React from 'react';
import firebase from '../Firebase';
import {Link} from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

class Create extends React.Component {
    constructor(){
        super();
        this.ref = firebase.firestore().collection('boards');
        this.state={
            titulo: '',
            contenido: '',
        };
    }

    handleEditorChange = (e) => {
      const state=this.state;
      state["contenido"]=e.target.getContent();
      this.setState(state);
    }


    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {titulo,contenido} = this.state;

        const date=new Date()

        console.log(date);
        this.ref.add(
            {
              titulo,
              contenido,
              date
            }
        ).then((docRef) => {
            this.setState({
                titulo: '',
                contenido: '',
            });
        this.props.history.push("/blogs");
        }).catch((error) =>{
            console.error("No se pudo agregar el blog: ",error);
        });
        
    }

    render(){
        const {titulo} = this.state;
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
                      <Editor
                          init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                              'advlist autolink lists link image charmap print preview anchor',
                              'searchreplace visualblocks code fullscreen',
                              'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                              'undo redo | formatselect | bold italic backcolor | \
                              alignleft aligncenter alignright alignjustify | \
                              bullist numlist outdent indent | removeformat | image | help'
                          }}
                          onChange={this.handleEditorChange}
                        />
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