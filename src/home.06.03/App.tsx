import { useState } from "react";
import Header from "./Header";
import BlogPost from "./BlogPost";
import NewPostForm from "./NewPostForm";
import Footer from "./Footer";
import "./App.css"; 

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
  };

  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <NewPostForm onAddPost={addPost} />
      <div className="posts">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} onLike={likePost} onDelete={deletePost} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
