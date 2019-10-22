import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class Mce extends React.Component {
  
  
  constructor(){
    super();
    this.state={
      contenido: ''
    };
  }
  
  handleEditorChange = (e) => {
    const state=this.state;
    state["contenido"]=e.target.getContent();
    console.log(e.target.name);
    this.setState(state);
  }

  handleEditorSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <form  
      onSubmit={this.handleEditorSubmit}
      >
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

        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Mce;
