import { useState } from "react";

const NormalCounter = () => {
    const [string, setString] = useState("");
    const [submited, setSubmited] = useState(false);
    const [counts, setCounts] = useState({});
    const [length, setLength] = useState(0);

    function submit() {
        const initialCounts = {};
        for (let i = 0; i < 26; i++) {
            initialCounts[String.fromCharCode(65 + i)] = 0;
        }

        const newCounts = { ...initialCounts };
        for (let i = 0; i < string.length; i++) {
            const char = string[i].toUpperCase();
            if (newCounts[char] !== undefined) {
                newCounts[char] += 1;
            }
        }

        setLength(string.length);
        setCounts(newCounts);
        setSubmited(true);
        setString("");
    }

    return (
        <div className="flex my-3 justify-center items-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                <input
                    type="text"
                    placeholder="Insert the sequence"
                    value={string}
                    onChange={(e) => {
                        setString(e.target.value);
                    }}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base"
                />
                <button
                    onClick={submit}
                    className="w-full p-2 bg-green-600 text-white rounded-md text-base hover:bg-green-700 transition duration-300"
                >
                    Analyze
                </button>
                {submited && (
                    <ul className="list-none p-0 mt-4">
                        {Object.entries(counts).map(([letter, count]) =>
                            count > 0 ? (
                                <li
                                    key={letter}
                                    className="p-2 bg-gray-100 border border-gray-300 rounded-md mb-2 text-left odd:bg-gray-200"
                                >
                                    {letter}: {count}
                                </li>
                            ) : null
                        )}
                    </ul>
                )}
                {submited && (
                    <div className="mt-4">Sequence length is: {length}</div>
                )}
            </div>
        </div>
    );
};

export default NormalCounter;
