import Employee from "../model/Employee";

export default interface ApiClient {
    addEmployee(empl: Employee):Promise<Employee>;
    updateEmployee(id: number, empl: Partial<Employee>): Promise<Employee>;
    deleteEmployee(id: number): Promise<void>
    getEmployee(id: number): Promise<Employee | null>
    getAll(config?: {headers?: any, params?: any}): Promise<Employee[]>
    getBySalary(minSalary: number, maxSalary: number, config?: {headers?: any, params?: any}): Promise<Employee[]>;
    getByAge(minAge: number, maxAge: number, config?: {headers?: any, params?: any}): Promise<Employee[]>
}