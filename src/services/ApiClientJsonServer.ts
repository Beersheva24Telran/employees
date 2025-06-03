import Employee from "../model/Employee";
import ApiClient from "./ApiClient";
import axios, { AxiosError } from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/employees",
});
class ApiClientJsonServer implements ApiClient {
  async addEmployee(empl: Employee): Promise<Employee> {
    const res = await axiosInstance.post<Employee>("/", empl);
    return res.data;
  }
  async updateEmployee(
    id: string,
    updater: Partial<Employee>
  ): Promise<Employee> {
    const res = await axiosInstance.patch<Employee>(`/${id}`, updater);
    return res.data;
  }
  async deleteEmployee(id: string): Promise<Employee> {
    const res = await axiosInstance.delete<Employee>(`/${id}`);
    return res.data;
  }
  async getEmployee(id: string): Promise<Employee | null> {
    let res = null;
    try {
      const response = await axiosInstance.get<Employee>(`/${id}`);
      res = response.data;
    } catch (error) {
      if ((error as AxiosError).response?.status != 404) {
        throw error;
      }
    }
    return res;
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

    return this.getAll(config).then((data) =>
      data.filter((e) => e.birthDate >= dateMin && e.birthDate <= dateMax)
    );
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
