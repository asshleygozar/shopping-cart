import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';

const CartItemContext = createContext({
	item: 0,
	setItem: () => {},
});

export default function App() {
	const [item, setItem] = useState(0);
	const [cart, setCart] = useState([]);

	return (
		<div className='wrapper'>
			<div className='content'>
				<CartItemContext.Provider value={{ item, setItem, cart, setCart }}>
					<NavigationBar />
					<main className='main-content'>
						<Outlet />
					</main>
				</CartItemContext.Provider>
			</div>
		</div>
	);
}

export { CartItemContext };
