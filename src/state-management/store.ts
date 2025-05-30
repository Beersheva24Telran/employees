import { StatHelpText } from '@chakra-ui/react';
import {create} from 'zustand'
interface EmployeesQuery {
   department:string | null;
    min: number | null,
    max: number | null

}
interface EmployeesStore {
    employeeQuery: EmployeesQuery;
    setDepartment: (department: string|null) => void;
    setMin: (min: number|null) => void;
    setMax: (max: number|null) => void
}

const useEmployeesQuery = create<EmployeesStore>(set => (
    {
        employeeQuery: {} as EmployeesQuery,
        setDepartment: (department: string | null) => set((state) => ({
            employeeQuery: {...state.employeeQuery, department}
        })),
        setMin: (min: number | null) => set((state) => (
            {
                employeeQuery: {...state.employeeQuery, min}
            }
        )),
        setMax: (max: number | null) => set((state) => (
            {
                employeeQuery: {...state.employeeQuery, max}
            }
        ))
    }
))
export default useEmployeesQuery;