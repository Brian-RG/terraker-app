import React from 'react';
import firebase from '../Firebase';
import {Link} from 'react-router-dom';
import './show.css';
//import DOMPurify from 'dompurify'

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            board:{},
            key:''
        };
    }
    componentDidMount(){
        const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
        ref.get().then((doc) =>{
            if(doc.exists){
                this.setState({
                    board:doc.data(),
                    key:doc.id,
                    isLoading:false
                })
            }
            else{
                console.log("Error");
            }
        });
    }

    delete(id){
        firebase.firestore().collection('boards').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            this.props.history.push("/blogs")
          }).catch((error) => {
            console.error("Error removing document: ", error);
          });
    }


    render() {
        const Md = ({timestamp}) =>{
            return(
              <p>{timestamp? timestamp.toDate().toDateString():""}</p>
            ) 
        }
        return (
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
              <h4><Link to="/blogs">Board List</Link></h4>
                <h3 className="panel-title">
                  {this.state.board.titulo}
                </h3>
              </div>
              <div className="panel-body">
                <dl>
                  <dd dangerouslySetInnerHTML={{__html:this.state.board.contenido}} ></dd>
                </dl>
              </div>
              
              <div className="row">
                <div className="col"></div>
                <div className="col-md-auto"></div>
                <div className="col col-lg-2">
                  <Md timestamp={this.state.board.date}/>
                </div>
              </div>
              <Link to={`/edit/${this.state.key}`} className="btn btn-success">Edit</Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        );
      }

}

export default Show;