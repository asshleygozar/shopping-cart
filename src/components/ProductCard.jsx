import { useState, useContext } from 'react';
import { CartItemContext } from '../App';
import '../styles/ProductCard.css';

export default function ProductDetails({
	id,
	imageSource,
	title,
	price,
}) {
	const [quantity, setQuantity] = useState(1);
	const { item, setItem, setCart } = useContext(CartItemContext);

	const addToCart = () => {
		const productDetails = {
			productId: id,
			productImage: imageSource,
			productTitle: title,
			productPrice: price,
			productQuantity: quantity,
		};
		setItem(item + 1);
		setCart((product) => [...product, productDetails]);
	};

	const incrementQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decrementQuantity = () => {
		const isQuantityLessThanOne =
			quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);

		return isQuantityLessThanOne;
	};

	return (
		<div className='product-card'>
			<img
				className='product-image'
				src={imageSource}
				alt={title}
			/>
			<div className='product-detail-container'>
				<div className='product-detail'>
					<h1 className='product-title'>{title}</h1>
					<h2 className='product-price'>{`Price: $${price}`}</h2>
				</div>
				<div className='product-quantity-container'>
					<button
						onClick={() => incrementQuantity()}
						className='increase-quantity-buttton quantity-button'
					>
						+
					</button>
					<p className='product-quantity'>{quantity}</p>
					<button
						onClick={() => decrementQuantity()}
						className='decrease-quantity-button quantity-button'
					>
						-
					</button>
				</div>
				<button
					onClick={() => addToCart()}
					className='add-to-cart-button'
				>
					Add to cart
				</button>
			</div>
		</div>
	);
}

export function ProductCart({
	productId,
	imageSource,
	title,
	price,
	quantity,
}) {
	const { setCart } = useContext(CartItemContext);
	const { item, setItem } = useContext(CartItemContext);

	const deleteCartItem = () => {
		setCart((prevCart) =>
			prevCart.filter((product) => product.productId !== productId)
		);
		setItem(item - 1);
	};

	return (
		<div
			className='product-card'
			key={productId}
		>
			<img
				className='product-image'
				src={imageSource}
				alt={title}
				width={50}
				height={90}
			/>
			<div className='product-detail-container'>
				<div className='product-detail'>
					<h1 className='product-title'>{title}</h1>
					<h2 className='product-price'>{`Price: $${price}`}</h2>
				</div>
				<div className='product-quantity-container'>
					<p className='product-quantity'>Quantity: {quantity}</p>
				</div>
				<button
					onClick={() => deleteCartItem()}
					className='remove-button'
				>
					Remove
				</button>
			</div>
		</div>
	);
}
