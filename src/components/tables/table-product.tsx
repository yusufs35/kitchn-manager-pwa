import { GroupedProduct } from "../../types/grouped-order";

type PropTypes = {
	product: GroupedProduct;
};

const TableProduct = ({ product }: PropTypes) => {
	return (
		<li>
			<strong>{product.quantity}</strong> <span>{product.name}</span>
		</li>
	);
};

export default TableProduct;
