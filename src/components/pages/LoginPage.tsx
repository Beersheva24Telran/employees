import React from 'react'
import LoginForm from '../LoginForm'
import { LoginData } from '../../model/auth-data'
import authClient from '../../services/AuthClientJsonServer'
import { apiClient } from '../../services/ApiClientJsonServer'

const LoginPage = () => {
const submitter = async (loginData: LoginData) => {
    const res = await authClient.login(loginData);
    apiClient.setToken(res!.token)
    return !!res
    
}
  return (
    <LoginForm submitter={submitter}></LoginForm>
  )
}

export default LoginPage