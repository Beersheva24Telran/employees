import { Box, HStack, Image } from "@chakra-ui/react"
import logo from '../assets/image.png'
import { NavLink } from "react-router-dom"
import { ColorModeButton } from "./ui/color-mode";
interface NavItem {
    path: string;
    label: string;
    children?: NavItem[];
}
const navItems: NavItem[] = [
    {path: '/', label:'Home'},
    {path: '/search', label: 'Search'},
    {path: '/statistics', label: 'Statistics'}
]
const Nav = () => {
  return (
    <HStack>
        <Image boxSize="50px" src={logo} marginEnd={"3vw"}></Image>
        <HStack   width="100%" justifyContent={"space-between"}>
        
            {navItems.map(item => <NavLink key={item.path} to={item.path} style={{
                 fontSize: "1.2rem"}}>{item.label}</NavLink>)}
                 <ColorModeButton></ColorModeButton>
        </HStack>
    </HStack>
  )
}

export default Nav