import useEmployees from '../../hooks/useEmployees';
import { apiClient } from '../../services/ApiClientJsonServer';
import DistributionItem from '../../model/DistributionItem';
import { getDistributionItems } from '../../utils/functions';
import Statistics from '../Statistics';

const AgeStatisticsPage = () => {
 const {data, error, isLoading} = useEmployees(() => apiClient.getAll())
    let items: DistributionItem[] = [];
    if (!error) {
        items = getDistributionItems(data?.map(e => new Date().getFullYear() - new Date(e.birthDate).getFullYear()) || [], 5)
    }
  return (
    <Statistics error={error} isLoading={isLoading} items={items} label={'Age'} xlabel={'ages'}></Statistics>
  )
}

export default AgeStatisticsPage
