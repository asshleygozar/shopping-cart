import { Link } from "react-router-dom";

export default function Home() {
    return (
			<section>
				<h1>Home Page</h1>
				<h2>Welcome to Shopping Cart!</h2>
				<Link to={'/shop'}>
					<button>Start shopping</button>
				</Link>
			</section>
		);
}