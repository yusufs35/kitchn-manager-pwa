import { SiClockify } from "react-icons/si";
import { CgSandClock } from "react-icons/cg";

const PendingStats: React.FC = () => {
	return (
		<ul className="stats pending-stats">
			<li>
				<a title="AVG PENDING">
					<span className="icon">
						<SiClockify />
					</span>
					<span className="title">AVG PENDING</span>{" "}
					<span className="score">1</span> MIN
				</a>
			</li>
			<li>
				<a title="MAX PENDING">
					<span className="icon">
						<CgSandClock />
					</span>
					<span className="title">MAX PENDING</span>{" "}
					<span className="score">3</span> MIN
				</a>
			</li>
		</ul>
	);
};

export default PendingStats;
