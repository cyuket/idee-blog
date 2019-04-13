import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import firebase from '../../Firebase/config'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import ReactCloudinaryUploader from '@app-masters/react-cloudinary-uploader'
import "./dash.css"

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('articles').doc();
    this.state = {
      editorState: EditorState.createEmpty(),
      content: '',
      title: '',
   
      featuredImage: ''
    }
  }
  onEditorStateChange = (editorState) => {
    
    this.setState({
      editorState,
    }); 
  };
  upload = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloud_name: 'cyuket',
      upload_preset: 'cyuket',
      maxFiles: 1
    }, (error, result) => {
        let featuredImage = result[0].url;
        console.log(featuredImage)
        this.setState({featuredImage})
      // document.querySelector("#imageURL0").src = result[0].url;

      })
       myWidget.open();
  }
  onSubmitButton = (event) => {
    event.preventDefault()
    const content = event.target.content.value;
    const title = event.target.title.value;
    const featuredImage = this.state.featuredImage
    const datePublished = new Date();
    this.ref.set({
      content,
      title,
      featuredImage,
      datePublished
    }).then(() => {
      console.log("done")
      this.setState({
        editorState: EditorState.createEmpty(),
        content: '',
        title: '',

        featuredImage: ''
      })
    })
  }
  render() {
    
    const { editorState } = this.state; 
    return (
      <div className="body">
        
        {/*  */}
            
        <form onSubmit={this.onSubmitButton}>  

          <TextField
            required
            id="standard-full-width"
            label="Title"
            name=  "title"
            style={{ margin: 8 }}
            placeholder="Post Title"
            helperText="Please give Short Caption"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
        />
          <div className="" >
        
            <div style={{ width: "60%"}}>
              <label>sosoadoo</label>
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
              />
              <textarea
                style={{display:"none"}}
                disabled
                name="content"
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
              />    
            </div>
            <div className="imageUpload" >
              <img src={this.state.featuredImage} className="image"/>
              <input type="button" value="Add FeaturedImage" onClick={this.upload} style={{ margin: "1%" }} alt="Featured Image" />
            </div>
            <input type="submit" value="Submit" />
      </div>
      </form>
      </div>
    )
  }
}
