import { useState, useEffect } from "react";
import axios from "axios";
const GeminiSearch = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  useEffect(() => {
    const storedHistory = localStorage.getItem("geminiSearchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("geminiSearchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setResponse("");
    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAo_H2fkN00fjm-sQkU2t2EdNDeSlx9Zeg`,
        {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const generatedText = res.data.candidates[0].content.parts[0].text;
      if (generatedText) {
        setResponse(generatedText);
        setSearchHistory((prevHistory) => [
          { query: input, response: generatedText},
          ...prevHistory,
        ]);
      } else {
        setResponse("Жауап табылмады");
      }
    } catch (err) {
      console.error(err);
      setError("Қате Gemini API");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      
      <h2 className="
        text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white m-2"
      >Gemini Search</h2>
      <div>
        
        <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Сұрау енгізіңіз"
        className="
        w-350 p-3 border rounded-[10px] border-gray-300 m-2 
        "
        />
        <button 
        className="
        text-black border  px-4 py-2 rounded-[10px]
        "
        onClick={handleSearch} disabled={loading}>
          
          {loading ? "Жүктелуде..." : "Іздеу"}
        </button>
      </div>
      {error && <p>{error}</p>}
      {response && (
        <div 
        className="
        bg-gray-100 p-4 rounded-lg shadow-md mt-4"
        >
          <h3 className="
            text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white
          ">Жауап:</h3> <p>{response}</p>
        </div>
      )}
      {searchHistory.length > 0 && (
        <div className="        bg-gray-100 p-4 rounded-lg shadow-md mt-4">
          
          <h3 className="
            text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white"
          >Ізделген сурақ:</h3>
          <ul>
            
            {searchHistory.map((item, index) => (
              <li key={index}>
                
                <strong>Сұрау:</strong> {item.query} <br />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default GeminiSearch;
