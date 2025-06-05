import { Button } from '@chakra-ui/react'
import {FC} from 'react'
interface Props {
    submitter: () => void
}
const Logout: FC<Props> = ({submitter}) => {
  return (
    <Button onClick={submitter}>Logout</Button>
  )
}

export default Logout