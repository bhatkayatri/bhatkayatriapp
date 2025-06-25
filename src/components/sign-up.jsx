import React from 'react';

import FormInput from './form-input';
import CustomButton from './custom-button';

import { auth, createUserProfileDocument } from './firebase.utils';

import './sign-up.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordError: '',  // store error message here
    };
  }

  // Password validation regex rules
  validatePassword = (password) => {
    const minLength = /.{8,}/;
    const lowercase = /[a-z]/;
    const uppercase = /[A-Z]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const number = /[0-9]/;

    if (!minLength.test(password)) return "Chhota packet bada dhamaka? Minimum 8 characters chahiye!";
    if (!lowercase.test(password)) return "Lowercase ka thoda pyaar do, bina uske password adhoora hai!";
    if (!uppercase.test(password)) return "Thoda bada dhamaka bhi chahiye – ek uppercase letter daalo!";
    if (!specialChar.test(password)) return "Kuch masaledaar character daalo, warna password bore lagega!";
    if (!number.test(password)) return "Number bhi toh chahiye, password bina uske aadha adhoora hai!";
    
    return ''; // no error = valid password
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword, passwordError } = this.state;

    // Password and confirm password match check
    if (password !== confirmPassword) {
      alert("Passwords don't match! Do you even match in real life?");
      return;
    }

    // Check password validation one last time before submit
    if (passwordError) {
      alert("Arre bhai/behna, pehle password sahi kar, tab submit karna!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        passwordError: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    // Validate password live if password field changes
    if (name === 'password') {
      const error = this.validatePassword(value);
      this.setState({ passwordError: error });
    }

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword, passwordError } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form
          className="sign-up-form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
          noValidate
        >
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            autoComplete="off"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            autoComplete="off"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            autoComplete="new-password"
            required
          />
          {/* Password hint */}
          <small className="password-hint" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
            Password must have: lowercase, uppercase, number, special character & minimum 8 characters
          </small>
          {/* Sarcastic error */}
          {passwordError && (
            <div className="password-error" style={{ color: '#e60073', fontWeight: 'bold', marginBottom: '1rem' }}>
              {passwordError}
            </div>
          )}
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            autoComplete="new-password"
            required
          />
          <CustomButton type="submit" disabled={!!passwordError}>
            SIGN UP
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
