import { PiClockCountdownThin } from "react-icons/pi";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
const OrderStats: React.FC = () => {
	return (
		<ul className="stats order-stats">
			<li>
				<a title="ORDERS IN THE LAST 15 MINS">
					<span className="icon">
						<PiClockCountdownThin />
					</span>
					<span className="title">ORDERS IN THE LAST 15 MINS</span>{" "}
					<span className="score">5</span>
				</a>
			</li>
			<li>
				<a title="RDERS IN THE LAST HOUR">
					<span className="icon">
						<PiClockCounterClockwiseLight />
					</span>
					<span className="title">ORDERS IN THE LAST HOUR</span>{" "}
					<span className="score">5</span>
				</a>
			</li>
		</ul>
	);
};

export default OrderStats;
