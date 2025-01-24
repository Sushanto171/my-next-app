import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    return (
      <div>
        <h2>Error Fetching posts</h2>
      </div>
    );
  }
  const posts = await res.json();
  return (
    <div>
      <h1 className="text-center py-6 text-2xl underline">All Posts</h1>
      <ul className="mb-6">
        {posts.map((post, i) => (
          <li
            key={post.id}
            className="flex items-center gap-3 capitalize leading-relaxed tracking-wide"
          >
            <span>{i + 1}.</span>{" "}
            <Link
              className="hover:underline opacity-90"
              href={`blog/${post.id}`}
            >
              {post.title}.
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
