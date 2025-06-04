import {QueryFunction, useQuery} from '@tanstack/react-query';
import Employee from '../model/Employee';
import useEmployeesQuery from '../state-management/store';
import { AxiosError } from 'axios';
const useEmployees = (queryFn: QueryFunction<Employee[]>) => {
  const employeeQuery = useEmployeesQuery()
  const res = useQuery<Employee[], AxiosError>({
    queryKey: ["employees", employeeQuery],
    queryFn,
    staleTime: 3600 * 1000
  })
  if (res.error) {
    throw res.error;
  }
  return res;
}

export default useEmployees