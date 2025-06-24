import React from 'react';

import FormInput from './form-input';
import CustomButton from './custom-button';

import { auth,signInWithGoogle } from './firebase.utils';

import './Sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      count:0
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  increCounter=()=>{
    this.setState(prevState=>({...prevState,count:prevState.count+1}));
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
          <CustomButton id='counter' onClick={this.increCounter}> Increment {this.state.count} </CustomButton>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google 
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;