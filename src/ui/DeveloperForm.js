import React from 'react';
import RosterService from "../services/RosterService.js"

export default class DeveloperForm extends React.Component {
  constructor(props, developerService = new RosterService()) {
    super(props);
    this.developerService = developerService;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.state = {newImage: ''};
  }
  handleSubmit(event) {
    event.preventDefault();
    let infile = this.fileInput.current.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      // convert image file to base64 string
      console.log(reader.result);
      this.developerService.addDeveloper(this.state.name, reader.result);
    }.bind(this);
    
    reader.readAsDataURL(infile);
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className='col'>
                <input type='text' value={this.state.name}/>
            </div>
            <div className='col'>
              <input type="file" ref={this.fileInput}/>
            </div>
            <div className='col'>
              <button type="submit">Submit</button>
            </div>
        </form>
        <img src={this.state.newImage} alt="blank" height="300" width="300"/>
      </div>
    );
  }
}