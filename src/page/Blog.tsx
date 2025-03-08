import './project.css'
const BlogPost = ({ title, content }) => {
    return (
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    );
};

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Атым: Бекарыс",
            content: "Тегім: Нұрболат"
        },
        {
            id: 2,
            title: "Мектебім: #12 гимназия",
            content: "Сыныбым:9Б"
        },
        {
            id: 3,
            title: "Қосымша: Amjilt cyber school",
            content: "Группам: 24/5"
        }
    ];

    return (
        <div className="blog-container">
            {posts.map(post => (
                <div key={post.id} className="blog-post">
                    <BlogPost  title={post.title} content={post.content} />
                </div>
                
            ))}
        </div>
    );
};

export default Blog;