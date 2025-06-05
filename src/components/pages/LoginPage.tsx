import React from 'react'
import LoginForm from '../LoginForm'
import { LoginData } from '../../model/auth-data'

const LoginPage = () => {
  return (
    <LoginForm submitter={(loginData: LoginData) => loginData.email == "kuku" && loginData.password== "kukureku" 
        ? Promise.resolve(true) : Promise.resolve(false)}></LoginForm>
  )
}

export default LoginPage