import EmployeesTable from '../EmployeesTable'
import useEmployeesQuery from '../../state-management/store'
import { apiClient } from '../../services/ApiClientJsonServer';

const HomePage = () => {
    const department = useEmployeesQuery(s => s.employeeQuery.department);
    

  return (
    <EmployeesTable queryFn={() => apiClient.getAll({params: {department}})}></EmployeesTable>
  )
}

export default HomePage