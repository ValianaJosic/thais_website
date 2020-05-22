import React, { Fragment } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import ThaisContact from '../../assets/images/thaiscontact.png';
import ContactIMG from '../../assets/images/compass.jpeg';
import '../Contact/Contact.css';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Fragment>
        <div><img className="contact-me" src={ThaisContact} alt="Thais"></img></div>
        <div className="form">
        <Form
          onSubmit={this.submitForm}
          action="https://formspree.io/xjveybgj"
          method="POST"
          style={{ width: '600px' }}
        >
          <FormGroup>
            <Label style={{color: '#3A5C83'}}>Name</Label>
            <Input type="name" name="name" />
          </FormGroup>
          <FormGroup>
            <Label style={{color: '#3A5C83'}}>Email</Label>
            <Input type="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label style={{color: '#3A5C83'}}>Message</Label>
            <Input type="textarea" name="message" />
          </FormGroup>
          {status === "SUCCESS" ? <p style={{color: '#3A5C83'}}>Your message was sent.</p> : <Button  className="submit-btn" style={{backgroundColor: '#6096BA'}}>Submit</Button>}
          {status === "ERROR" && <p style={{color: '#3A5C83'}}>Ooops! There was an error.</p>}
        </Form>
        </div>
        <div className="img-contact">
          <img src={ContactIMG} alt="thais" className="contact-img" />
        </div>
      </Fragment>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}


// import React, { Fragment } from 'react';
// import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
// import '../Contact/Contact.css';
// import ThaisContact from '../../assets/images/thaiscontact.png';
// import ContactIMG from '../../assets/images/compass.jpeg'
// import axios from 'axios';

// class Contact extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       message: ''
//     }
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     axios({
//       method: "POST",
//       url: "http://localhost:3002/send",
//       data: this.state,
//     }).then((response) => {
//       if (response.data.status === 'success') {
//         alert("Message Sent.");
//         this.resetForm()
//       } else if (response.data.status === 'fail') {
//         alert("Message failed to send.")
//       }
//     })
//   }

//   resetForm() {

//     this.setState({ name: '', email: '', message: '' })
//   }

//   render() {
//     return (
//       <Fragment>
//         <img className="contact-me" src={ThaisContact} alt="Thais"></img>
//         <div className="form">
//           <Form onSubmit={this.handleSubmit.bind(this)} method="POST" style={{ width: '600px' }}>
//             <FormGroup>
//               <Label for="name" style={{color: '#3A5C83'}}>Name:</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={this.state.name} onChange={this.onNameChange.bind(this)} />
//             </FormGroup>

//             <FormGroup>
//               <Label for="email" style={{color: '#3A5C83'}}>Email:</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//             </FormGroup>

//             <FormGroup>
//               <Label for="message" style={{color: '#3A5C83'}}>Message:</Label>
//               <Input
//                 type="textarea"
//                 name="message"
//                 value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//             </FormGroup>

//             <Button className="submit-btn" style={{backgroundColor: '#6096BA'}}>Submit</Button>
//           </Form>
//         </div>
//         <div className="img-contact">
//          <img src={ContactIMG} alt="thais" className="contact-img" />
//        </div>
//       </Fragment>
//     );
//   }

//   onNameChange(event) {
//     this.setState({ name: event.target.value })
//   }

//   onEmailChange(event) {
//     this.setState({ email: event.target.value })
//   }

//   onMessageChange(event) {
//     this.setState({ message: event.target.value })
//   }
// }

// export default Contact;

