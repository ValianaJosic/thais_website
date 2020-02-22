
import React, { Component, Fragment } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import '../Contact/Contact.css';
import ThaisContact from '../../assets/images/thaiscontact.png'


class Contact extends Component {

  render() {
    return (
      <Fragment>
        <img className="contact-me" src={ThaisContact} alt="Thais"></img>
        <div className="form">
          <Form onSubmit={this.handleSubmit} style={{ width: '600px' }}>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email:</Label>
              <Input
                type="email"
                name="email"
                onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label for="message">Message:</Label>
              <Input
                type="textarea"
                name="message"
                onChange={this.handleChange} />
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </div>
      </Fragment>
    );
  }
}

export default Contact;