import { Avatar, Spinner, Table, Text } from "@chakra-ui/react";
import React from "react";
import useEmployees from "../hooks/useEmployees";

const EmployeesTable = () => {
  const { data: employees, error, isLoading } = useEmployees();
  return (
    <>
      {error ? (
        <Text>{error.message}</Text>
      ) : (
        <>
          {isLoading && <Spinner></Spinner>}
          <Table.ScrollArea borderWidth="1px" rounded="md" height="85vh">
            <Table.Root size="sm" stickyHeader>
              <Table.Header>
                <Table.Row bg="bg.subtle">
                  <Table.ColumnHeader></Table.ColumnHeader>
                  <Table.ColumnHeader>Name</Table.ColumnHeader>
                  <Table.ColumnHeader>Department</Table.ColumnHeader>
                  <Table.ColumnHeader>Salary</Table.ColumnHeader>
                  <Table.ColumnHeader>Birthdate</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {employees?.map((empl) => (
                  <Table.Row key={empl.id}>
                    <Table.Cell>
                      <Avatar.Root>
                        <Avatar.Fallback name={empl.fullName} />
                        <Avatar.Image src={empl.avatar} />
                      </Avatar.Root>
                    </Table.Cell>
                    <Table.Cell>{empl.fullName}</Table.Cell>
                    <Table.Cell>{empl.department}</Table.Cell>
                    <Table.Cell >{empl.salary}</Table.Cell>
                    <Table.Cell>{empl.birthDate}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </>
      )}
    </>
  );
};

export default EmployeesTable;
