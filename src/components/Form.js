import React from 'react';
import axios from 'axios';
import '../style/Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
      e.preventDefault();
      axios({
        method: "POST",
        url:"https://kylemasterson.com/#about",
        data:  this.state,
        validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
      }).then((response)=>{
        if (response.data.status === 'success') {
          alert("Message Sent.");
          this.resetForm()
        } else if (response.data.status === 'fail') {
          alert("Message failed to send.")
        }
      })
    }

    resetForm(){
      this.setState({fname: '', lname: '', email: '', message: ''})
    }

  render() {
    return(
      <div className="form">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
         <div id='inner-form'>
          <div id='form-name'>
            <div className="form-group" id='line-one-width'>
              <label htmlFor="fname"><p>First name</p></label>
              <input type="text" className="form-control" value={this.state.fname} onChange={this.onFNameChange.bind(this)} />
            </div>
            <div className="form-group" id='line-one-width'>
              <label htmlFor="lname"><p>Last name</p></label>
              <input type="text" className="form-control" value={this.state.lname} onChange={this.onLNameChange.bind(this)} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><p>Email address</p></label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message"><p>Message</p></label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
         </div>
          <button type="submit" id="contact-btn">Submit</button>
        </form>
      </div>
    );
  }

  onFNameChange(event) {
    this.setState({fname: event.target.value})
  }

  onLNameChange(event) {
    this.setState({lname: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

}

export default Form;
