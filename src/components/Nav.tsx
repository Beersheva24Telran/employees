import { Box, HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/image.png'
import { NavLink } from "react-router-dom"
import { ColorModeButton } from "./ui/color-mode";
import { ReactNode } from "react";
import { FiHome } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { FcStatistics } from "react-icons/fc";
interface NavItem {
    path: string;
    label: string;
    children?: NavItem[];
    icon?: ReactNode
}
const navItems: NavItem[] = [
    {path: '/', label:'Home', icon: <FiHome></FiHome>},
    {path: '/search', label: 'Search', icon: <IoIosSearch></IoIosSearch>},
    {path: '/statistics', label: 'Statistics', icon: <FcStatistics ></FcStatistics>}
]
const Nav = () => {
  return (
    <HStack>
        <Image boxSize="50px" src={logo} marginEnd={"3vw"}></Image>
        <HStack   width="100%" justifyContent={"space-between"}>
        
            {navItems.map(item => 
                <NavLink key={item.path} to={item.path} style={{
                     fontSize: "1.2rem"}}><HStack><Box hideBelow="sm" as="span">{item.icon}</Box><Text>{item.label}</Text></HStack></NavLink>
            )}
                 <ColorModeButton></ColorModeButton>
        </HStack>
    </HStack>
  )
}

export default Nav