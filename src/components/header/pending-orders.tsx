import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { GroupedOrder, GroupedOrders } from "../../types/grouped-order";
import { getPendingOrders } from "../../utils/data-functions";

const PendingOrders: React.FC = () => {
	const [amountOfOrders, setAmountOfOrders] = useState(0);

	const { data } = useQuery<GroupedOrders<GroupedOrder>>({
		queryKey: ["orders"],
		enabled: false,
	});

	useEffect(() => {
		if (!data) return;
		const amount = getPendingOrders(data);
		setAmountOfOrders(amount);
	}, [data]);

	return (
		<div className="stats pending-orders">
			<a title="Pending orders">
				<span className="icon">
					<MdOutlinePendingActions />
				</span>
				<span className="score">{amountOfOrders}</span>{" "}
				<span className="title">pending orders</span>
			</a>
		</div>
	);
};

export default PendingOrders;
