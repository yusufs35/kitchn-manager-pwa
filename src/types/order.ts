export interface Product {
	quantity: number;
	name: string;
	category_name: string | null;
	is_ready: boolean;
	cartitem_id: number;
	options: (string | null)[];
	remark: string | null;
	id: number;
}

export interface Order {
	id: number;
	total: string;
	table_name: string;
	created_at: number;
	eta: number | null;
	status: number;
	customer_user_id: number;
	is_paid: boolean;
	note: string;
	sent_to_pos: boolean;
	is_redirected: boolean;
	callback_received: boolean;
	payment_type: number;
	pos_id: string;
	room_number: string | null;
	order_of_day: number;
	service_name: number;
	error_status: Record<string, unknown>;
	voucher_discount: number;
	service_cost: number;
	transaction_id: string | null;
	extra_fields: Record<string, unknown>;
	is_status_loaded: boolean;
	batching_status: number;
	buzzer: string;
	customer_user_phone: string;
	customer_user_first_name: string;
	customer_user_last_name: string;
	customer_user_username: string;
	customer_user_zip: string | null;
	customer_user_city: string | null;
	customer_user_street: string | null;
	customer_user_house_nr: string | null;
	venue_id: number;
	venue_name: string;
	venue_pos: string;
	number_of_sms: number;
	products: Product[];
	is_expanded: boolean;
}
