import Employee from "../model/Employee";

export default interface ApiClient {
    addEmployee(empl: Employee):Promise<Employee>;
    updateEmployee(updater:{id: string, empl: Partial<Employee>}): Promise<Employee>;
    deleteEmployee(id: string): Promise<Employee>
    getEmployee(id: string): Promise<Employee | null>
    getAll(config?: {headers?: any, params?: any}): Promise<Employee[]>
    getBySalary(minSalary: number, maxSalary: number, config?: {headers?: any, params?: any}): Promise<Employee[]>;
    getByAge(minAge: number, maxAge: number, config?: {headers?: any, params?: any}): Promise<Employee[]>
}