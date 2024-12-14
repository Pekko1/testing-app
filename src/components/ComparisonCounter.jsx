import { useState } from "react";

const ComparisonCounter = () => {
    const [stringA, setStringA] = useState("");
    const [stringB, setStringB] = useState("");

    const [submit, setSubmit] = useState(false);

    const [splitA, setSplitA] = useState([]);
    const [splitB, setSplitB] = useState([]);

    const handleSubmit = () => {
        setSubmit(true);
        const testA = stringA.toUpperCase().split("");
        const testB = stringB.toUpperCase().split("");

        setSplitA(testA);
        setSplitB(testB);
    };

    const resetSubmit = ()=>{
        setStringA("")
        setStringB("")
        setSplitA([])
        setSplitB([])
        setSubmit(false)
    }

    return (
        <div className="flex my-3 flex-col justify-center items-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center gap-10 max-w-md">
                <div className="flex gap-10">
                    <input
                        type="text"
                        placeholder="Insert the sequence"
                        value={stringA}
                        onChange={(e) => setStringA(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base"
                    />
                    <input
                        type="text"
                        placeholder="Insert the sequence"
                        value={stringB}
                        onChange={(e) => setStringB(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full p-2 bg-green-600 text-white rounded-md text-base hover:bg-green-700 transition duration-300"
                >
                    Compare
                </button>
                <button
                    onClick={resetSubmit}
                    className="p-2 bg-red-600 text-white rounded-md text-base hover:bg-red-700 transition duration-300 mt-2 w-10/12" 
                >
                    Reset
                </button>
            </div>

            {submit && (
                <div className="mt-5 text-lg flex gap-8">
                    <div className="p-4 bg-gray-200 rounded-lg shadow-md w-1/2">
                        <div className="grid sm:grid-cols-6 grid-cols-2 gap-4 ">
                            {splitA.map((letter, index) => {
                                const isMatch = letter === splitB[index];

                                return (
                                    <div
                                        className={`flex items-center justify-center gap-1 p-2 rounded-md ${
                                            isMatch
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        } shadow-md transition-all duration-300 hover:scale-105`}
                                        key={index}
                                    >
                                        <div className="text-base text-center">
                                            {index}
                                        </div>
                                        <div className="text-lg">{letter}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="p-4 bg-gray-200 rounded-lg shadow-md w-1/2 ">
                        <div className="grid sm:grid-cols-6 grid-cols-2 gap-4 ">
                            {splitB.map((letter, index) => {
                                const isMatch = letter === splitA[index];

                                return (
                                    <div
                                        className={`flex items-center justify-center gap-1 p-2 rounded-md ${
                                            isMatch
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        } shadow-md transition-all duration-300 hover:scale-105`}
                                        key={index}
                                    >
                                        <div className="text-base text-center">
                                            {index}
                                        </div>
                                        <div className="text-lg">{letter}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComparisonCounter;
