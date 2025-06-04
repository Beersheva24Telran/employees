import { AxiosError } from 'axios';
import {Text} from "@chakra-ui/react"
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();

  return (
    <div>{
        <Text>{ error instanceof AxiosError ? error.status: "unknown error"}</Text>
        }
        </div>
  )
}

export default ErrorPage