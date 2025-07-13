import { Link } from "react-router-dom";
import '../styles/home.css';

export default function Home() {
    return (
			<section className="home-page">
				<header>
					<h1>Welcome to Shopping Cart</h1>
					<h2>A place where you shop your favorite clothes and accessories</h2>
				</header>
				<Link to={'/shop'} className="shop-navigation-link">
					<button className="shop-button">Start shopping</button>
				</Link>
			</section>
		);
}