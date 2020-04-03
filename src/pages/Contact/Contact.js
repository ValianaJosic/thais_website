import React, { Fragment } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import '../Contact/Contact.css';
import ThaisContact from '../../assets/images/thaiscontact.png';
import ContactIMG from '../../assets/images/compass.jpeg'
import axios from 'axios';

class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://thais.herokuapp.com/contact/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {

    this.setState({ name: '', email: '', message: '' })
  }

  render() {
    return (
      <Fragment>
        <img className="contact-me" src={ThaisContact} alt="Thais"></img>
        <div className="form">
          <Form onSubmit={this.handleSubmit.bind(this)} method="POST" style={{ width: '600px' }}>
            <FormGroup>
              <Label for="name" style={{color: '#3A5C83'}}>Name:</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </FormGroup>

            <FormGroup>
              <Label for="email" style={{color: '#3A5C83'}}>Email:</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </FormGroup>

            <FormGroup>
              <Label for="message" style={{color: '#3A5C83'}}>Message:</Label>
              <Input
                type="textarea"
                name="message"
                value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </FormGroup>

            <Button className="submit-btn" style={{backgroundColor: '#6096BA'}}>Submit</Button>
          </Form>
        </div>
        <div className="img-contact">
         <img src={ContactIMG} alt="thais" className="contact-img" />
       </div>
      </Fragment>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default Contact;
