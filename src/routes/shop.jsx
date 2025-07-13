import { useEffect, useState } from 'react';
import ProductDetails from '../components/ProductCard.jsx';
import '../styles/shop.css';

export default function Shop() {
	const [myData, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDataForProduct = async () => {
			try {
				const productData = await getProductResponse(
					'https://fakestoreapi.com/products'
				);
				setData(productData);
				setError(null);
			} catch (err) {
				setError(err);
				setData(null);
			} finally {
				setLoading(false);
			}
		};
		fetchDataForProduct();
	}, []);

	return (
		<section className='shop-page'>
			<h1 className='shop-header'>Shop</h1>
			<main className='product-container'>
				{error && <div>Error loading the page</div>}
				{loading && <div>Loading...</div>}
				{myData &&
					myData.map((product) => (
						<ProductDetails
							key={product.id}
							id={product.id}
							imageSource={product.image}
							title={product.title}
							price={product.price}
							description={product.description}
						/>
					))}
			</main>
		</section>
	);
}

const getProductResponse = async (url) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Error fetching data: Status ${response.status}`);
	}

	return response.json();
};
