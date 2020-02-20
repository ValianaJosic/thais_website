
import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import '../Contact/Contact.css';


class Contact extends Component {
  render() {
    return (
      <div className="form">
        <Form style={{ width: '600px' }}>
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
    );
  }
}

export default Contact;