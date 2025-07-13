import { useContext } from 'react';
import { CartItemContext } from '../App';
import { ProductCart } from '../components/ProductCard';
import '../styles/cart.css';

export default function Cart() {
	const { item, cart } = useContext(CartItemContext);

	return (
		<section className='cart-page'>
			<h1 className='cart-header'>Total number of item: {item}</h1>
			<main className='cart-product-item-container'>
				{cart &&
					cart.map((product) => (
						<ProductCart
							key={product.productId}
							productId={product.productId}
							imageSource={product.productImage}
							title={product.productTitle}
							price={product.productPrice}
							quantity={product.productQuantity}
						/>
					))}
			</main>
		</section>
	);
}
