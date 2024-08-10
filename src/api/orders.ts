
const URL =
	"https://staging.smartendr.be/app/api_get_orders?locations=23,12&timestamp=43399";

export const fetchOrders = async () => {
	const res = await fetch(URL);
	const data = await res.json();
	return data;
};
