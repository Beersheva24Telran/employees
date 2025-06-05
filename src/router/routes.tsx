import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage";
import Layout from "../components/pages/Layout";
import HomePage from "../components/pages/HomePage";
import SearchPage from "../components/pages/SearchPage";
import AgeStatisticsPage from "../components/pages/AgeStatisticsPage";
import { SalariesStatisticsPage } from "../components/pages/SalariesStatisticsPage";
import AddEmployeePage from "../components/pages/AddEmployeePage";
import LoginPage from "../components/pages/LoginPage";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      {path: "login", element:<LoginPage></LoginPage>},
      {
        path: "statistics",
        children: [
          { path: "ages", element: <AgeStatisticsPage /> },
          { path: "salaries", element: <SalariesStatisticsPage /> },
        ],
      },
      {path: "add", element: <AddEmployeePage></AddEmployeePage>}
    ],
  },
]);
export default router;
