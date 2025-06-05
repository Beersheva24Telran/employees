import React from 'react'
import LoginForm from '../LoginForm'
import { LoginData } from '../../model/auth-data'
import authClient from '../../services/AuthClientJsonServer'
import { apiClient } from '../../services/ApiClientJsonServer'
import { useUserDataStore } from '../../state-management/store'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {

    const login = useUserDataStore(s => s.setUserData);
    const userData = useUserDataStore(s => s.userData);
const submitter = async (loginData: LoginData) => {
    const res = await authClient.login(loginData);
    if(res) {
            login(res);
         apiClient.setToken(res!.token)
    }
   
    return !!res
    
}
  return (
    <>
    {userData ? <Navigate to={'/'}/> : <LoginForm submitter={submitter}></LoginForm>}
    
    </>
  )
}

export default LoginPage