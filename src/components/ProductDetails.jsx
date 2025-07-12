import { useState, useContext } from 'react';
import { CartItemContext } from '../App';


export default function ProductDetails({
	imageSource,
	title,
	price,
	description,
}) {
	const [quantity, setQuantity] = useState(1);
    const { item, setItem } = useContext(CartItemContext);
	
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
			<button onClick={() => setItem(item + 1)}>Add to card</button>
		</div>
	);
}

