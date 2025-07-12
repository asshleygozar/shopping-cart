import Home from './routes/home';
import Shop from './routes/shop';
import App from './App';
import Cart from './routes/cart';

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/shop',
				element: <Shop />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
	},
];

export default routes;
