import {create} from 'zustand'
// interface EmployeesQuery {
//     birthDate_gt:string | null;
//     birthDate_lt:string | null;
//     salary_gt:string | null;
//     salary_lt:string | null;
//     department:string | null;

// }
interface EmployeesStore {
    department:string | null;
    setDepartment: (department: string|null) => void;
}
const useDepartment = create<EmployeesStore> (set => ({
    department: null,
    setDepartment: (department: string | null) => set(() => ({
        department
    }))

}))
export default useDepartment