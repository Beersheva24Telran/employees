import Employee from "../model/Employee";
import ApiClient from "./ApiClient";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/employees",
});
class ApiClientJsonServer implements ApiClient {
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
  async getAll(config?: { headers?: any; params?: any }): Promise<Employee[]> {
    const res = await axiosInstance.get<Employee[]>("/", config);
    return res.data;
  }
  getBySalary(
    minSalary: number,
    maxSalary: number,
    config?: { headers?: any; params?: any }
  ): Promise<Employee[]> {
    config = config || {};
    config.params = config.params || {};
    config.params = {
      ...(config.params || {}),
      salary_gt: minSalary,
      salary_lt: maxSalary,
    };

    return this.getAll(config);
  }
  getByAge(
    minAge: number,
    maxAge: number,
    config?: { headers?: any; params?: any }
  ): Promise<Employee[]> {
    const dateMin = getDateFromAge(maxAge);
    const dateMax = getDateFromAge(minAge);
    
    return this.getAll(config).then(data => data.filter(e =>e.birthDate >= dateMin && e.birthDate <= dateMax ));
  }
}
export const apiClient = new ApiClientJsonServer();
function getDateFromAge(age: number): string {
  const date = new Date();
  date.setDate(1);
  date.setMonth(0);
  date.setFullYear(date.getFullYear() - age);
  return date.toISOString().substring(0, 10);
}
