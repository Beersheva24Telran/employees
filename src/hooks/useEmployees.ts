import {QueryFunction, useQuery} from '@tanstack/react-query';
import Employee from '../model/Employee';
const useEmployees = (queryFn: QueryFunction<Employee[]>) => {
  return useQuery<Employee[], Error>({
    queryKey: ["employees"],
    queryFn,
    staleTime: 5000,
    refetchInterval: 5000
  })
}

export default useEmployees