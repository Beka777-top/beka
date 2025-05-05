import { useState } from 'react';
import axios from 'axios';

const GeminiSearch = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setResponse('');

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
            'Content-Type': 'application/json',
          },
        }
      );

      const generatedText = res?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText) {
        setResponse(generatedText);
      } else {
        setResponse('Ответ пустой или неожиданной структуры.');
      }
    } catch (err) {
      console.error(err);
      setError('Ошибка при запросе к Gemini API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 font-sans">
      <h2 className="text-2xl font-bold mb-4">Gemini AI Поиск</h2>

      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Введите запрос"
        className="w-72 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSearch}
        disabled={loading}
        className={`ml-4 px-4 py-2 rounded-md text-white ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Загрузка...' : 'Поиск'}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {response && (
        <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Ответ:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiSearch;