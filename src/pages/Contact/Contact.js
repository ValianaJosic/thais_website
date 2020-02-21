
import React, { Component, Fragment } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import '../Contact/Contact.css';


class Contact extends Component {

  render() {
    return (
      <Fragment>
        <p className="contact-me">Thais Reyes
      <br></br>
          Real Estate Advisor
      <br></br>
          thais.reyes@compass.com
      <br></br>
          M: 786.546.0440
      </p>
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