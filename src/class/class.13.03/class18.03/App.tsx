// import { BrowserRouter , Routes, Route, Link, } from "react-router-dom";


// export default function AppRouter() {
//   return (
//   <BrowserRouter>
//   <Routes>
//     < Route path="/" element={<Home/>} />
//     < Route path="/about" element={<About/>} />
//     < Route path="/company" element={<Company/>} />     
//   </Routes>
//   </BrowserRouter>
//   )
// }

// function Navbar(){
//   return(
//     <nav>
//       <Link to="/about"> About</Link> {"   |   "}
//       <Link to="/contact"> Contact</Link> {"   |   "}
//       <Link to="https://www.canva.com/design/DAGeaL-Pk8M/VMC_BJLCEITQqh6Wb0vxMw/edit"> canva</Link> {"   |   "}
//       <a href="https://www.canva.com/design/DAGeaL-Pk8M/VMC_BJLCEITQqh6Wb0vxMw/edit" target="_blank"> a_canva</a>
//     </nav>
//   )
// }

// function Home() {
//   return <h1>Home Page</h1>
// }

// function About() {
//   return <h1>About Page</h1>
// }

// function Company() {
//   return <h1>Contact Page</h1>
// }



// import { useState, useEffect } from "react";

// function Navbar() {
//   const [theme, setTheme] = useState("white");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'white' ? 'black': 'white';
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <nav style={{ backgroundColor: theme, padding: "10px" }}>
//       <button onClick={toggleTheme}>Түсін өзгерту</button>
//     </nav>
//   );
// }

// export default Navbar;



// import { useState, useEffect } from "react";

// function About() {
//   const [favorites, setFavorites] = useState(() => {
//     const savedFavorites = localStorage.getItem("favorites");
//     return savedFavorites ? JSON.parse(savedFavorites) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const addToFavorites = () => {
//     const newFavorites = [...favorites, "About"];
//     setFavorites(newFavorites);
//   };

//   return (
//     <div>
//       <h1>About Us</h1>
//       <button onClick={addToFavorites}>Менің сүйікті бетім</button>
//     </div>
//   );
// }

// export default About;



import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>❌ Page Not Found (404)</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default NotFound;