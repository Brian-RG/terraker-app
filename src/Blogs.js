import React from 'react';
import {Link} from 'react-router-dom';
import firebase from './Firebase';

class Blogs extends React.Component{
    constructor(props){
        super(props);
        this.ref=firebase.firestore().collection('boards');
        this.unsubscribe=null;
        this.state={
            boards: []
        }
    };
    
    OnCollectionUpdate = (querySnapShot) => {
        const boards = [];
        querySnapShot.forEach(doc => {
            const {titulo,contenido,autor} = doc.data();
            boards.push({
               key: doc.id,
               doc,
               titulo,
               contenido,
               autor
            });   
        });
        this.setState({boards});
    }
    componentDidMount(){
        //this.unsubscribe=firebase.firestore().collection('boards').onSnapshot(this.OnCollectionUpdate);
        this.unsubscribe = this.ref.onSnapshot(this.OnCollectionUpdate);
    }

    componentWillUnmount(){
      this.unsubscribe=null;
    }

    render(){
        return (
            <div className="container">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    BOARD LIST
                  </h3>
                </div>
                <div className="panel-body">
                  <h4><Link to="/create">Add Board</Link></h4>
                  <table className="table table-stripe">
                    <thead>
                      <tr>
                        <th>titulo</th>
                        <th>contenido</th>
                        <th>autor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.boards.map((board) =>
                        <tr>
                          <td><Link to={`/show/${board.key}`}>{board.titulo}</Link></td>
                          <td>{board.contenido}</td>
                          <td>{board.autor}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
    }
}

export default Blogs;
    