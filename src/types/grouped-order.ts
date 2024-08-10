export interface GroupedProduct {
	id: number;
	name: string;
	quantity: number;
}

export interface GroupedOrder {
	tableName: string;
	totalOrder: number,
	totalEta: number,
	products: {
		[key: string]: GroupedProduct;
	};
}

export interface GroupedOrders<GroupedOrder> {
	[key: string]: GroupedOrder;
}
