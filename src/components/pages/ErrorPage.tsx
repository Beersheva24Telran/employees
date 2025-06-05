import { AxiosError } from 'axios';
import {Text} from "@chakra-ui/react"
import { ErrorResponse, isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom'
import { useEffect } from 'react';
import { useUserDataStore } from '../../state-management/store';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const logout = useUserDataStore(s => s.resetUserData)
    useEffect (() => {
const status = (error as AxiosError).request?.status || 0;
         if (status == 401 || status == 403) {
          logout();
           navigate("./login")
         }
    }, [error])
    let text = "";

    if (isRouteErrorResponse(error)) {
      text = `Invalid route ${(error as ErrorResponse).data}`
    } else {
       text = (error as Error).message
    }

  return (
    <div>{
        <Text>{ text}</Text>
        }
        </div>
  )
}

export default ErrorPage