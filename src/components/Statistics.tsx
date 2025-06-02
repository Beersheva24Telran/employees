import React from 'react'
import DistributionItem from '../model/DistributionItem'
import { Box, Text, Spinner, SimpleGrid } from '@chakra-ui/react';
import { useColorModeValue } from './ui/color-mode';
import ChartStatistics from './ChartStatistics';
import TableStatistics from './TableStatistics';
interface Props {
    error: Error | null;
    isLoading: boolean;
    items: DistributionItem[];
    label: string;
    xlabel: string
}
const Statistics: React.FC<Props> = ({error, isLoading, items, label, xlabel}) => {
  return (
     <>
        {
           error ? <Text fontSize="2rem" color={useColorModeValue("red.500", "red.200")}>{error.message}</Text>
           : <Box>
            {isLoading && <Spinner></Spinner>}
                <SimpleGrid columns = {{
                    base: 1,
                    sm: 2
                }} gap={5}>
                    <ChartStatistics items={items} xlabel={xlabel}></ChartStatistics>
                    <TableStatistics label={label} items={items} ></TableStatistics>
                </SimpleGrid>
           </Box>
        }
        </>
  )
}

export default Statistics