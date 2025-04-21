const BlogPost = ({ post, onLike, onDelete }) => (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => onLike(post.id)}>Ұнады ❤️ {post.likes}</button>
      <button onClick={() => onDelete(post.id)}>Өшіру 🗑️</button>
    </div>
  );
  
export default BlogPost;