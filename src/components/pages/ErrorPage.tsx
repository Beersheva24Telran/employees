import { AxiosError } from 'axios';
import {Text} from "@chakra-ui/react"
import { ErrorResponse, isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom'
import { useEffect } from 'react';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    useEffect (() => {
const status = (error as AxiosError).request?.status || 0;
         if (status == 401 || status == 403) {
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