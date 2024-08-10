import { GroupedOrder, GroupedOrders } from "../types/grouped-order";
import { Order, Product } from "../types/order";
/* 
type GroupedOrders<Order> = {
	[key: string]: Order;
};

export const groupBy = <T>(array: T[], key: keyof T): GroupedOrders<T> => {
	return array.reduce((result: GroupedOrders<T>, item: T) => {
		const groupKey = item[key] as unknown as string;
		if (!result[groupKey]) {
			result[groupKey] = [];
		}
		result[groupKey].push(item);
		return result;
	}, {});
};
 */
export const groupDataByTableAndProduct = (
	array: Order[]
): GroupedOrders<GroupedOrder> => {
	const arr = array.filter(
		(item) => item.products.length > 0 && item.products[0].id
	);

	return arr.reduce((result: GroupedOrders<GroupedOrder>, item: Order) => {
		const groupKey: string = item.table_name;

		if (!result[groupKey]) {
			result[groupKey] = {
				tableName: groupKey,
				products: {},
				totalOrder: 1,
				totalEta: item.eta ?? 0,
			} as GroupedOrder;
		} else {
			result[groupKey].totalEta += item.eta ?? 0;
			result[groupKey].totalOrder += 1;
		}

		item.products.map((product) => {
			const productId = product.id;
			const productName = product.name;
			const productQuantity = product.quantity;

			if (!result[groupKey].products[productId]) {
				result[groupKey].products[productId] = {
					id: productId,
					name: productName,
					quantity: productQuantity,
				};
			} else {
				result[groupKey].products[productId].quantity +=
					productQuantity;
			}
		});

		return result;
	}, {});
};

export const getPendingOrders = (data: GroupedOrders<GroupedOrder>): number => {
	if (!data) return 0;
	const amount = Object.values(data).reduce(
		(total: number, item: GroupedOrder) => {
			if (item?.totalEta && item?.totalOrder) {
				if (item.totalEta / item.totalOrder > 0) return total + 1;
				else total;
			}

			return total;
		},
		0
	);

	return amount;
};
