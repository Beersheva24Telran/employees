import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/image.png";
import { NavLink } from "react-router-dom";
import { ColorModeButton } from "./ui/color-mode";
import { ReactNode } from "react";
import { FiHome } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { FcStatistics } from "react-icons/fc";
import { IoMdPersonAdd } from "react-icons/io";
import MenuNav from "./MenuNav";
import { UserData } from "../model/auth-data";
import { useUserDataStore } from "../state-management/store";
export interface NavItem {
  path: string;
  label: string;
  children?: NavItem[];
  icon?: ReactNode;
  renderFn?: (userData: UserData | null) => boolean;
}
const navItems: NavItem[] = [
  { path: "/login", label: "Login", renderFn: (userData) => !userData },
  {
    path: "/",
    label: "Home",
    icon: <FiHome></FiHome>,
    renderFn: (userData) => !!userData,
  },
  {
    path: "/add",
    label: "Add Employee",
    icon: <IoMdPersonAdd></IoMdPersonAdd>,
    renderFn: (userData) => !!userData && userData.role === "ADMIN",
  },
  {
    path: "/search",
    label: "Search",
    icon: <IoIosSearch></IoIosSearch>,
    renderFn: (userData) => !!userData,
  },
  {
    path: "statistics",
    label: "Statistics",
    icon: <FcStatistics></FcStatistics>,
    children: [
      { path: "statistics/ages", label: "Age Statistics" },
      { path: "statistics/salaries", label: "Salary Statistics" },
      { path: "statistics/departments", label: "Department Statistics" },
    ],
    renderFn: (userData) => !!userData,
  },
  {path: '/logout', label: "Logout", renderFn: (userData)=>!!userData}
];
const Nav = () => {
    const userData = useUserDataStore(s => s.userData);
  return (
    <HStack>
      <Image boxSize="50px" src={logo} marginEnd={"3vw"}></Image>
      <HStack width="100%" justifyContent={"space-between"}>
        {navItems.map((item) => {
            
            if(item.renderFn && !item.renderFn(userData)) {
                return null;
            }
           const res = item.children ? (
            <MenuNav
              key={item.path}
              items={item.children}
              label={item.label}
              icon={item.icon}
            ></MenuNav>
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              style={{
                fontSize: "1.2rem",
              }}
            >
              <HStack>
                <Box hideBelow="sm" as="span">
                  {item.icon}
                </Box>
                <Text>{item.label}</Text>
              </HStack>
            </NavLink>
          );
          return res;
        })}
        <ColorModeButton></ColorModeButton>
      </HStack>
    </HStack>
  );
};

export default Nav;
