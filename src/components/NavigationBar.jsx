import { Link } from 'react-router-dom';
import { CartItemContext } from '../App';
import { useContext } from 'react';
import '../styles/NavigationBar.css';

export default function NavigationBar() {
	const { item } = useContext(CartItemContext);
	return (
		<nav className='navigation-container'>
			<ul className='main-navigation-container'>
				<li>
					<Link
						to={'/'}
						className='main-navigation-link'
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to={'/shop'}
						className='main-navigation-link'
					>
						Shop
					</Link>
				</li>
			</ul>

			<ul className='cart-navigation-container'>
				<li>
					<Link
						to={'/cart'}
						className='cart-icon cart-navigation-link'
					>
						Cart
					</Link>
				</li>
				<li>
					<p className='cart-navigation-link'>Item: {item}</p>
				</li>
			</ul>
		</nav>
	);
}
