import {create} from 'zustand'
import SearchObject from '../model/SearchObject';
import { UserData } from '../model/auth-data';
import { apiClient } from '../services/ApiClientJsonServer';
interface EmployeesQuery {
   department:string | null;
   searchObject: SearchObject | null;

}
interface EmployeesStore {
    employeeQuery: EmployeesQuery;
    setSearchObject:(searchObject:SearchObject) => void;
    resetSearchObject: () => void
    setDepartment: (department: string|null) => void;
    
}

const useEmployeesQuery = create<EmployeesStore>(set => (
    {
        employeeQuery: {} as EmployeesQuery,
        setDepartment: (department: string | null) => set((state) => ({
            employeeQuery: {...state.employeeQuery, department}
        })),
        setSearchObject: (searchObject: SearchObject) => set((state) => (
            {
                employeeQuery: {...state.employeeQuery, searchObject}
            }
        )),
        resetSearchObject: () => set((state) => ({
            employeeQuery: {...state.employeeQuery, searchObject:null}
        }))
    }
))
interface UserDataStore {
    userData: UserData | null;
    setUserData: (userData: UserData) => void;
    resetUserData: () => void
}
export const useUserDataStore = create<UserDataStore>(set => ({
    userData: getToken (),
    setUserData: (userData) => set(() => ({
        userData
    })),
    resetUserData: () => set(() => ({
        userData: null
    }))
}))
function getToken(): UserData | null {

    const json = localStorage.getItem("token");
    console.log(json)
    let userData: UserData|null = null;
    if (json) {
        userData = JSON.parse(json) as UserData
        apiClient.setToken(userData.token);
    }
    return userData;

}
export default useEmployeesQuery;