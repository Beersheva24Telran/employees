import Employee from "../model/Employee";
import ApiClient from "./ApiClient";

export class ApiClientJsonServer implements ApiClient {
    addEmployee(empl: Employee): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    updateEmployee(id: number, empl: Partial<Employee>): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    deleteEmployee(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getEmployee(id: number): Promise<Employee | null> {
        throw new Error("Method not implemented.");
    }
    getAll(config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        //TODO
        //write implementation getting data from http://localhost:3000/employees based on AXIOS package
        return Promise.resolve([]);
    }
    getBySalary(minSalary: number, maxSalary: number, config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        throw new Error("Method not implemented.");
    }
    getByAge(minAge: number, maxAge: number, config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        throw new Error("Method not implemented.");
    }
    
}