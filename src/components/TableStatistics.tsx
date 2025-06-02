import React from 'react'
import DistributionItem from '../model/DistributionItem';
import { Table } from '@chakra-ui/react';
interface Props {
    label: string;
    items: DistributionItem[]
}
const TableStatistics: React.FC<Props> = ({label, items}) => {
  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" maxHeight={{
        base: "40vh",
        sm: "70vh"
    }} >
                <Table.Root size="sm" stickyHeader className="table">
                  <Table.Header fontSize={{sm:"1.1rem",md:"1.2"}}>
                    <Table.Row bg="bg.subtle" zIndex={"auto"}>
                      <Table.ColumnHeader>Min {label}</Table.ColumnHeader>
                      <Table.ColumnHeader>Max {label}</Table.ColumnHeader>
                      <Table.ColumnHeader >Amount</Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {items.map((item) => (
                      <Table.Row key={item.min} >
                        <Table.Cell  >
                          {item.min}
                        </Table.Cell>
                        <Table.Cell>{item.max}</Table.Cell>
                        <Table.Cell>{item.amount}</Table.Cell>
                        
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Table.ScrollArea>
  )
}

export default TableStatistics