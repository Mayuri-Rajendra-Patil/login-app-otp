import React from 'react'
import firebase from './firebase'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  handleChange = (event) =>{
    const {name, value } = event.target
    this.setState({
        [name]: value
      });
  };
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  };
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function(confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render() {
    return (
      <div>
        
       
        <h2>Login Form</h2>
      <Form onSubmit={this.onSignInSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control  type="phone" placeholder="Enter Phone Number"
        required  onChange={this.handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your phone with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Send OTP 
      </Button>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>OTP </Form.Label>
        <Form.Control type="password" placeholder="Entre OTP" onChange={this.handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
      </div>
    )
  }
}
export default App;