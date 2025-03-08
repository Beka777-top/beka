import Header from "./header";
import Nav from "./Nav";
import Main from "./Main";
import BlogPost from "./Blog";

export default function App(){

    const posts =[
        {
            id: 1,
            title: "Менің алғышқы React-тағы блог жазбам",
            content: "React - бұл интерфейстерді құруға арналган күшті кітапхана"
        }
    ]
    
    return (
        <div className="App">
            <Header />
            <Nav />
            {posts.map (post =>
                <BlogPost key={post.id} title={post.title}  content={post.content}/>
            )}
            <Main />
        </div>
    );
}

 