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

	return (
		<div>
			<CartItemContext.Provider value={{ item, setItem }}>
				<NavigationBar />
				<main className='content'>
					<Outlet />
				</main>
			</CartItemContext.Provider>
		</div>
	);
}

export { CartItemContext };

