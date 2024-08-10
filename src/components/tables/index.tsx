import React from "react";
import { fetchOrders } from "../../api/orders";
import { useQuery } from "@tanstack/react-query";
import { groupDataByTableAndProduct } from "../../utils/data-functions";
import Table from "./table";
import "./style.scss";
import Loading from "../common/loading";

const Tables: React.FC = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ["orders"],
		queryFn: async () => {
			const data = await fetchOrders();
			return groupDataByTableAndProduct(data.orders);
		},
		refetchInterval: 30 * 1000,
		
	});

	if (isPending) return <Loading/>;

	if (error) return "An error has occurred: " + error.message;

	return (
		<div className="tables">
			{data &&
				Object.keys(data).map((key) => (
					<Table key={key} table={data[key]} />
				))}
		</div>
	);
};

export default Tables;
