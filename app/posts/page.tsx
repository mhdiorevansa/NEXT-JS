import CardList from "../components/posts/CardList";
import ViewUserButton from "../components/posts/ViewUserButton";

// get data api
const base_url = "https://jsonplaceholder.typicode.com/posts";

// definisi tipe data
interface Iposts {
	userId: number;
	id: number;
	title: string;
	body: string;
}

const PostsPage = async () => {
	const response = await fetch(base_url, {
		// fetch ulang setiap ada request page/reload
		// cache: "no-store",
		// revalidate setiap 10 detik, tiap 10 detik menampilkan data baru
		next: { revalidate: 10 },
	});
	// untuk typescript, tipe data dari variabelnya kita definisikan
	const posts: Iposts[] = await response.json();
	return (
		<div>
			<p>{new Date().toLocaleTimeString()}</p>
			<h1 className="text-fuchsia-500">Post Page</h1>
			{/* lakukan mapping */}
			{posts.map((post) => {
				return (
					<CardList key={post.id}>
						<p>{post.id}</p>
						<p>{post.title}</p>
						<p>{post.body}</p>
						<ViewUserButton userId={post.userId} />
					</CardList>
				);
			})}
		</div>
	);
};

export default PostsPage;
