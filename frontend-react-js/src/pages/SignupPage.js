import './SignupPage.css';
import React from "react";
import {ReactComponent as Logo} from '../components/svg/logo.svg';
import { Link } from "react-router-dom";
// [TODO] Authenication
import { Auth } from 'aws-amplify';
export default function SignupPage() {
  // Username is Eamil
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState('');
  const onsubmit = async (event) => {
    event.preventDefault();
    setErrors('')
    console.log('username',username)
    console.log('email',email)
    console.log('name',name)
    const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          name: name,
          email: email,
          preferred_username: username,
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed }
        }
      }
    )
   } 
  }
