import {QueryFunction, useQuery} from '@tanstack/react-query';
import Employee from '../model/Employee';
import useEmployeesQuery from '../state-management/store';
const useEmployees = (queryFn: QueryFunction<Employee[]>) => {
  const employeeQuery = useEmployeesQuery()
  return useQuery<Employee[], Error>({
    queryKey: ["employees", employeeQuery],
    queryFn,
    staleTime: 5000,
    refetchInterval: 5000
  })
}

export default useEmployees