import {createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../components/pages/ErrorPage';
import Layout from '../components/pages/Layout';
import HomePage from '../components/pages/HomePage';
import SearchPage from '../components/pages/SearchPage';
import StatisticsPage from '../components/pages/StatisticsPage';
const router = createBrowserRouter([
    {
        path:'/',
        errorElement: <ErrorPage/>,
        element: <Layout/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'search', element: <SearchPage/>},
            {path: 'statistics', element: <StatisticsPage/>},

        ]
    }
])
export default router;