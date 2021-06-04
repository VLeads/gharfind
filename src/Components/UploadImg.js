import React, {Component} from 'react';
import {firestore} from './Fire';
import "../Styles/UploadImg.css";

class UploadImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    const image = e.target.files[0];
    if (image) {
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = firestore.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        firestore.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    
    return (
      <div className="upload">
      <progress value={this.state.progress} max="100"/>
      <br/> 
        <input type="file" 
        onChange={this.handleChange}
        />
        <br />
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
        <br />
        <button onClick={this.handleUpload}>Upload Room Picture</button>
      </div>
    )
  }
}

export default UploadImg;