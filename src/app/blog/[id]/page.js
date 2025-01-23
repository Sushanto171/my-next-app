const Blog = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return (
      <div>
        <h2>Error fetching post</h2>
      </div>
    );
  }
  const post = await res.json();
  return (
    <div className="flex min-h-[calc(100vh-140px)] justify-center items-center">
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800 mb-3">
          Title: <span className="text-blue-600">{post.title}</span>
        </h1>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold text-gray-700">ID:</span> {post.id}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-700">Content:</span>{" "}
          {post.body}
        </p>
      </div>
    </div>
  );
};

export default Blog;
