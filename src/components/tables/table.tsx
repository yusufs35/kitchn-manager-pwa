import React, { useEffect, useState } from "react";
import { GroupedOrder } from "../../types/grouped-order";
import TableProduct from "./table-product";
import { getMinFromTimeStamp } from "../../utils/date-time";
import { FaUser, FaClock } from "react-icons/fa";

type PropTypes = {
	table: GroupedOrder;
};

const Table: React.FC<PropTypes> = ({ table }: PropTypes) => {
	const [tableAvgEta, setTableAvgEta] = useState(0);

	useEffect(() => {
		const avgEta = getMinFromTimeStamp(table.totalEta / table.totalOrder);
		setTableAvgEta(avgEta);
	}, []);

	return (
		<div className="table-card">
			<h3 className="table-card-header">
				<span className="user">
					<FaUser />
				</span>{" "}
				{table.tableName}
			</h3>
			<div className="table-card-body">
				<ul>
					{Object.keys(table.products).map((key) => (
						<TableProduct key={key} product={table.products[key]} />
					))}
				</ul>
			</div>
			<div className="table-card-footer">Avg <span className="icon"><FaClock/></span> {tableAvgEta} min</div>
		</div>
	);
};

export default Table;
