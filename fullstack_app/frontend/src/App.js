import { useState } from "react";

function App() {
    const [result, setResult] = useState(null);
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [loading, setLoading] = useState(false);

    const callBackend = async () => {
        setLoading(true);
        const res = await fetch(`https://cppneobackend.onrender.com/api/add/${a}/${b}`);
        const data = await res.json();
        setResult(data.result);
        setLoading(false);
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Neo react + Node + C++ Demo</h1>
            <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
            <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
            <button onClick={callBackend} disabled={loading}>Add</button>
            {loading && <p>Loading... (first request may take 30s)</p>}
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
}

export default App;