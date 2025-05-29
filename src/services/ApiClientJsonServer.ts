import Employee from "../model/Employee";
import ApiClient from "./ApiClient";
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/employees"
})
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
    async getAll(config?: { headers?: any; params?: any; }): Promise<Employee[]> {
       const res = await axiosInstance.get<Employee[]>("/", config);
        return res.data;
    }
    getBySalary(minSalary: number, maxSalary: number, config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        throw new Error("Method not implemented.");
    }
    getByAge(minAge: number, maxAge: number, config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        throw new Error("Method not implemented.");
    }
    
}