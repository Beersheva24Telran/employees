import { FC } from "react";
import _ from "lodash";
import { ResponsiveContainer,  CartesianGrid, XAxis, YAxis, Tooltip,  LineChart, Line } from "recharts";
import DistributionItem from "../model/DistributionItem";
interface Props {
  items: DistributionItem[],
  xlabel: string
}
const Chart: FC<Props> = ({ items, xlabel}) => {
  
  return <ResponsiveContainer width="100%" height={250}>
    <LineChart data={items}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" label={{ value: xlabel, position: "insideBottom", offset: -5 }} />
      <YAxis allowDecimals={false} label={{ value: "amount", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Line type="monotone" dataKey="amount" stroke="#3182ce" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
};

export default Chart;
