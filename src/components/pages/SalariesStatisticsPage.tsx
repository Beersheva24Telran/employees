import useEmployees from '../../hooks/useEmployees'
import { apiClient } from '../../services/ApiClientJsonServer'
import DistributionItem from '../../model/DistributionItem'
import { getDistributionItems } from '../../utils/functions'
import Statistics from '../Statistics'

export const SalariesStatisticsPage = () => {
    const {data, error, isLoading} = useEmployees(() => apiClient.getAll())
    let items: DistributionItem[] = [];
    if (!error) {
        items = getDistributionItems(data?.map(e => e.salary) || [], 5000)
    }
  return (
    <Statistics error={error} isLoading={isLoading} items={items} label={'Salary'} xlabel={'salaries'}></Statistics>
  )
}
