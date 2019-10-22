import React from 'react';
import {Link} from 'react-router-dom';
import firebase from './Firebase';

class Blogs extends React.Component{
    constructor(props){
        super(props);
        this.ref=firebase.firestore().collection('boards').orderBy('date',"desc");
        this.unsubscribe=null;
        this.state={
            boards: []
        }
    };
    
    OnCollectionUpdate = (querySnapShot) => {
        const boards = [];
        querySnapShot.forEach(doc => {
            const {titulo,contenido} = doc.data();
            boards.push({
               key: doc.id,
               doc,
               titulo,
               contenido,
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
                        <th colSpan="8">titulo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.boards.map((board,i) =>
                        <tr>
                          <td> <h1><Link to={`/show/${board.key}`} style={{ textDecoration: 'none' }} >{board.titulo}</Link> </h1></td>
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
    