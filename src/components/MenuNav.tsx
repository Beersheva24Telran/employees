import { FC, ReactNode, useState } from 'react';
import { NavItem } from './Nav'
import { Box, Button, Menu, Portal } from '@chakra-ui/react';
import ComponentMotion from './ComponentMotion';
import { easeOut } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
interface Props {
    items: NavItem[];
    label: string;
    icon?: ReactNode;
}
const duration=0.7
const MenuNav: FC<Props> = ({items, label, icon}) => {
const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Menu.Root onExitComplete={() => setIsOpen(false)} positioning={{ placement: "right" }}>
        <Menu.Trigger asChild  >
          <Button
            variant="outline"
            size="sm"
            borderWidth={0}
            onClick={() => setIsOpen(!isOpen)}
            fontSize={"1.2rem"}
          >
            {icon && <Box>{icon}</Box>}
            {label}
            {isOpen ? (
              <ComponentMotion duration={duration} timing={easeOut}>
                <FaChevronUp />
              </ComponentMotion>
            ) : (
              <FaChevronDown></FaChevronDown>
            )}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner >
            <ComponentMotion duration={duration} timing={easeOut}>
              <Menu.Content zIndex={1500}>
               
                {items.map((item) => (
                  <Menu.Item 
                    key={item.path}
                   
                    value={item.path}
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.Content>
            </ComponentMotion>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
  )
}

export default MenuNav
