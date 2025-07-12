import { useState, useContext } from 'react';
import { CartItemContext } from '../App';

export default function ProductDetails({
	id,
	imageSource,
	title,
	price,
	description,
}) {
	const [quantity, setQuantity] = useState(1);
	const { item, setItem, setCart } = useContext(CartItemContext);
   // Fix cart checkout logic | it is note displaying
	const addToCart = () => {
		const productDetails = {
			productId: id,
			productImage: imageSource,
			productTitle: title,
			productPrice: price,
			productDescription: description,
			productQuantity: quantity,
		};
		setItem(item + 1);
		setCart((product) => ([
			...product, productDetails
		]));
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
		<div className='card'>
			<img
				src={imageSource}
				alt={title}
				width={40}
				height={90}
			/>
			<h1>{title}</h1>
			<h2>{price}</h2>
			<p>{description}</p>
			<div>
				<button onClick={() => incrementQuantity()}>+</button>
				<p>{quantity}</p>
				<button onClick={() => decrementQuantity()}>-</button>
			</div>
			<button onClick={() => addToCart()}>Add to card</button>
		</div>
	);
}

export function ProductCart({
	productId,
	imageSource,
	title,
	price,
	description,
	quantity,
}) {

	const { setCart } = useContext(CartItemContext);
	const { item, setItem } = useContext(CartItemContext);

	const deleteCartItem = () => {
		setCart((prevCart) => prevCart.filter((product) => product.productId !== productId));
		setItem(item - 1);
	};

	return (
	<div className='cart-product' key={productId}>
		<img
			src={imageSource}
			alt={title}
			width={50}
			height={90}
		/>
		<h1>{title}</h1>
		<h2>{price}</h2>
		<p>{description}</p>
		<p>Quantity: {quantity}</p>
		<button onClick={() => deleteCartItem()}>Remove to cart</button>
	</div>
	);
}
