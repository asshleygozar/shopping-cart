import { Link } from 'react-router-dom';
import { CartItemContext } from '../App';
import { useContext } from 'react';

export default function NavigationBar() {
	const { item } = useContext(CartItemContext);
	return (
		<nav>
			<Link to={'/'}>Home</Link>

			<Link to={'/shop'}>Shop</Link>

			<Link to={'/cart'}>Cart</Link>

			<div>Items: {item}</div>
		</nav>
	);
}
