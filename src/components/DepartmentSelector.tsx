import { Menu, Button, Portal } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FC, useState } from "react";
import { easeOut } from "framer-motion";
import ComponentMotion from "./ComponentMotion";
import useEmployeesQuery from "../state-management/store";
import { departments } from "../../config/departments.json";

const duration = 0.5;

const PlatformSelector: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const department = useEmployeesQuery((s) => s.employeeQuery.department);
  const setDepartment = useEmployeesQuery((s) => s.setDepartment);
  return (
    <>
      <Menu.Root onExitComplete={() => setIsOpen(false)} positioning={{ placement: "left" }}>
        <Menu.Trigger asChild  >
          <Button
            variant="outline"
            size="sm"
            borderWidth={0}
            onClick={() => setIsOpen(!isOpen)}
          >
            {department || "Departments"}
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
                <Menu.Item 
                  key={"departnent"}
                  onClick={() => {
                    setDepartment(null);
                    setIsOpen(false);
                  }}
                  value={"All Departments"}
                >
                  All Departments
                </Menu.Item>
                {departments?.map((dep) => (
                  <Menu.Item
                    key={dep}
                    onClick={() => {
                      setDepartment(dep);
                      setIsOpen(false);
                    }}
                    value={dep}
                  >
                    {dep}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </ComponentMotion>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};

export default PlatformSelector;
