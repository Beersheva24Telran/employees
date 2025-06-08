import { it, expect, describe } from 'vitest';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { useUserDataStore } from '../state-management/store';
import { Provider } from '../components/ui/provider';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/pages/Layout';
import { employees } from './__mocks__/data/employees-mock';
import { QueryClient, QueryClientProvider, QueryMeta } from '@tanstack/react-query';
import EmployeesTable from '../components/EmployeesTable';
import  apiClient  from '../tests/__mocks__/services/ApiClientTest';

describe('Nav iems according to auth data', () => {
    it('should render only Login if no authorized user', () => {
        useUserDataStore.setState({
            userData: null
        })
        render (
            <Provider>
                <BrowserRouter>
                    <Layout></Layout>
                </BrowserRouter>
                
            </Provider>
        )
        expect (screen.getByText(/login/i)).toBeInTheDocument();
        expect (screen.queryByText(/logout/i)).not.toBeInTheDocument();
        expect (screen.queryByText(/home/i)).not.toBeInTheDocument();
        expect (screen.queryByText(/add/i)).not.toBeInTheDocument();
        expect (screen.queryByText(/statistics/i)).not.toBeInTheDocument();
        expect (screen.queryByText(/search/i)).not.toBeInTheDocument();
        
    })
    it('should render Home, Search, Logout, Statistic only if user has role "USER', () => {
        useUserDataStore.setState({
            userData: {role: "USER", token: "vvv", username: ""}
        })
        render (
            <Provider>
                <BrowserRouter>
                    <Layout></Layout>
                </BrowserRouter>
                
            </Provider>
        )
        expect (screen.queryByText(/login/i)).not.toBeInTheDocument();
        expect (screen.getByText(/logout/i)).toBeInTheDocument();
        expect (screen.getByText(/home/i)).toBeInTheDocument();
        expect (screen.queryByText(/add/i)).not.toBeInTheDocument();
        expect (screen.getByText(/statistics/i)).toBeInTheDocument();
        expect (screen.getByText(/search/i)).toBeInTheDocument();
        
    })
    it('should render Home, Search, Logout, Statistic, Add Employee only if user has role "ADMIN', () => {
        useUserDataStore.setState({
            userData: {role: "ADMIN", token: "vvv", username: ""}
        })
        render (
            <Provider>
                <BrowserRouter>
                    <Layout></Layout>
                </BrowserRouter>
                
            </Provider>
        )
        expect (screen.queryByText(/login/i)).not.toBeInTheDocument();
        expect (screen.getByText(/logout/i)).toBeInTheDocument();
        expect (screen.getByText(/home/i)).toBeInTheDocument();
        expect (screen.getByText(/add/i)).toBeInTheDocument();
        expect (screen.getByText(/statistics/i)).toBeInTheDocument();
        expect (screen.getByText(/search/i)).toBeInTheDocument();
        
    })
})
describe(`rendering ${employees.length} table cells in the component EmployeesTable`, () => {
    it('User has role "USER" no addition action cells should be rendered in the table', async () => {
        useUserDataStore.setState({
            userData: {role: "USER", token: "vvv", username: ""}
        })
        render (
            
            <Provider>
                <QueryClientProvider client={new QueryClient()} >

                    <EmployeesTable queryFn={()=>apiClient.getAll()} ></EmployeesTable>
                </QueryClientProvider>
                
            </Provider>
        )
        await expect(screen.findAllByText(/vasya/i)).resolves.toHaveLength(employees.length);
        await expect(screen.findByRole("button", {name: /delete/i})).rejects.toThrow();
    })
    it('User has role "ADMIN" no addition action cells should be rendered in the table', async () => {
        useUserDataStore.setState({
            userData: {role: "ADMIN", token: "vvv", username: ""}
        })
        render (
            
            <Provider>
                <QueryClientProvider client={new QueryClient()} >

                    <EmployeesTable queryFn={()=>apiClient.getAll()} ></EmployeesTable>
                </QueryClientProvider>
                
            </Provider>
        )
        await expect(screen.findAllByText(/vasya/i)).resolves.toHaveLength(employees.length);
        await expect(screen.findAllByRole("button", {name: /delete/i})).resolves.toHaveLength(employees.length);
    })
})