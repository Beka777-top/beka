import { useState } from "react";
import axios from "axios";

const GeminiSearch = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]); 
    setInput("");
    setLoading(true);
    setError(null);

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

      const generatedText = res?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      const botMessage = {
        sender: "bot",
        text: generatedText || "Ответ пустой или неожиданной структуры.",
      };

      setMessages((prev) => [...prev, botMessage]); 
    } catch (err) {
      console.error(err);
      setError("Ошибка при запросе к Gemini API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 font-sans">
      <h2 className="text-2xl font-bold mb-4">Поддержка</h2>

      <div className="chat-box h-96 overflow-y-auto border border-gray-300 rounded-md p-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-md ${
              message.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Введите сообщение"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          disabled={loading}
          className={`ml-4 px-4 py-2 rounded-md text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Загрузка..." : "Отправить"}
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default GeminiSearch;