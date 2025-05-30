import { Avatar, Spinner, Table, Text } from "@chakra-ui/react";
import useEmployees from "../hooks/useEmployees";
import { QueryFunction } from "@tanstack/react-query";
import Employee from "../model/Employee";
import { FC } from "react";
interface Props {
  queryFn: QueryFunction<Employee[]>
}
const EmployeesTable: FC<Props> = ({queryFn}) => {
  const { data: employees, error, isLoading } = useEmployees(queryFn);
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
                  <Table.ColumnHeader hideBelow={"md"}></Table.ColumnHeader>
                  <Table.ColumnHeader>Name</Table.ColumnHeader>
                  <Table.ColumnHeader>Department</Table.ColumnHeader>
                  <Table.ColumnHeader  hideBelow={"md"} >Salary</Table.ColumnHeader>
                  <Table.ColumnHeader  hideBelow={"md"} >Birthdate</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {employees?.map((empl) => (
                  <Table.Row key={empl.id} >
                    <Table.Cell  hideBelow={"md"}>
                      <Avatar.Root>
                        <Avatar.Fallback name={empl.fullName} />
                        <Avatar.Image src={empl.avatar} />
                      </Avatar.Root>
                    </Table.Cell>
                    <Table.Cell>{empl.fullName}</Table.Cell>
                    <Table.Cell>{empl.department}</Table.Cell>
                    <Table.Cell  hideBelow={"md"}>{empl.salary}</Table.Cell>
                    <Table.Cell  hideBelow={"md"}>{empl.birthDate}</Table.Cell>
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
