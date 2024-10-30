import Link from "next/link";

const HomePage = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<br />
			<Link href={"/posts"}>Posting Page</Link>
			<br />
			<Link href={"/albums"}>Album Page</Link>
		</div>
	);
};

export default HomePage;
