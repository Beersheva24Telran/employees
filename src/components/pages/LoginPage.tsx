import React from 'react'
import LoginForm from '../LoginForm'
import { LoginData } from '../../model/auth-data'
import authClient from '../../services/AuthClientJsonServer'

const LoginPage = () => {
const submitter = async (loginData: LoginData) => {
    const res = await authClient.login(loginData);
    return !!res
    
}
  return (
    <LoginForm submitter={submitter}></LoginForm>
  )
}

export default LoginPage