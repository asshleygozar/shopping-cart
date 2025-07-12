import { useContext } from 'react';
import { CartItemContext } from '../App';
import { ProductCart } from '../components/ProductDetails';

export default function Cart() {
	const { item, cart } = useContext(CartItemContext);

	return (
		<section>
			<h1>Total number of item: {item}</h1>
			{cart &&
				cart.map((product) => (
					<ProductCart
						key={product.productId}
						productId={product.productId}
						imageSource={product.productImage}
						title={product.productTitle}
						price={product.productPrice}
						description={product.productDescription}
						quantity={product.productQuantity}
					/>
				))}

			{console.log(cart)}
		</section>
	);
}
