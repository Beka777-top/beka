import { useState } from "react";
import axios from "axios";

const GeminiSearch = () => {
    const [text, setText] = useState("");
    const [response, setResponse] = useState("");
    const [targetLanguage, setTargetLanguage] = useState("ru");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setTargetLanguage(e.target.value);
    };

    const handleTranslate = async () => {
        if (!text.trim()) return;

        setLoading(true);
        setError(null);
        setResponse("");

        const languageLabel = targetLanguage === "ru"
            ? "русский"
            : targetLanguage === "kz"
            ? "казахский"
            : "английский";

        try {
            const res = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAo_H2fkN00fjm-sQkU2t2EdNDeSlx9Zeg`,
                {
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Переведи следующий текст на ${languageLabel} язык:\n\n"${text}"`
                                }
                            ]
                        }
                    ]
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            const generatedText =
                res?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (generatedText) {
                setResponse(generatedText);
            } else {
                setResponse("Ответ пустой или неожиданной структуры.");
            }
        } catch (err) {
            console.error(err);
            setError("Ошибка при запросе к Gemini API");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>Gemini Search</h1>
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Введите текст для перевода"
                style={{ width: "100%", height: "100px", marginBottom: "1rem", padding: "8px" }}
            ></textarea>
            <select
                value={targetLanguage}
                onChange={handleLanguageChange}
                style={{ marginBottom: "1rem", padding: "8px" }}
            >
                <option value="ru">Русский</option>
                <option value="en">Английский</option>
                <option value="kz">Казахский</option>
            </select>
            <br />
            <button
                onClick={handleTranslate}
                disabled={loading}
                style={{
                    padding: "8px 12px",
                    backgroundColor: loading ? "#ccc" : "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: loading ? "not-allowed" : "pointer",
                }}
            >
                {loading ? "Перевод..." : "Перевести"}
            </button>
            {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
            {response && (
                <div
                    style={{
                        marginTop: "1.5rem",
                        padding: "1rem",
                        backgroundColor: "#f9f9f9",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                    }}
                >
                    <h3>Ответ:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default GeminiSearch;
