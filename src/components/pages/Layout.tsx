import { Box } from '@chakra-ui/react'
import Nav from '../Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Box>
        <Nav></Nav>
        <Box marginTop={"5vh"}>
            <Outlet></Outlet>
        </Box>
    </Box>
  )
}

export default Layout