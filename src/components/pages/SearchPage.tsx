import SearchForm from '../SearchForm'
import EmployeesTable from '../EmployeesTable'
import useEmployeesQuery from '../../state-management/store'
import { Box } from '@chakra-ui/react'
import { QueryFunction } from '@tanstack/react-query'
import { apiClient } from '../../services/ApiClientJsonServer'
import Employee from '../../model/Employee'

const SearchPage = () => {
    const {employeeQuery} = useEmployeesQuery();
    const {department, searchObject} = employeeQuery;
   
    let config: any = {params: {}};
    department && (config.params.department = department)
    let queryFn: QueryFunction<Employee[]> = () => apiClient.getAll(config);
    if (searchObject) {
        queryFn = searchObject.type == "age" ? () => apiClient.getByAge(searchObject.min!, searchObject.max!, config)
        : () => apiClient.getBySalary(searchObject.min!, searchObject.max!, config)
    }

  return (
    <Box>
        <SearchForm ></SearchForm>
        <EmployeesTable queryFn={queryFn}></EmployeesTable>
    </Box>
  )
}

export default SearchPage