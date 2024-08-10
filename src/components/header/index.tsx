import React from "react";
import Logo from "./logo";
import "./style.scss";
import PendingOrders from "./pending-orders";
import PendingStats from "./pending-stats";
import OrderStats from "./order-stats";
import Toolbar from "./toolbar";

const Header: React.FC = () => {
	

	return (
		<header className="header">
			<Logo />
			<div className="stat-group">
				<PendingOrders />
				<PendingStats />
				<OrderStats />
			</div>
			<Toolbar />
		</header>
	);
};

export default Header;
