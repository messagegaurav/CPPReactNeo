import { useState } from "react";

function App() {
    const [result, setResult] = useState(null);
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);

    const callBackend = async () => {
        const res = await fetch(`http://localhost:5000/api/add/${a}/${b}`);
        const data = await res.json();
        setResult(data.result);
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Neo react + Node + C++ Demo</h1>
            <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
            <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
            <button onClick={callBackend}>Add</button>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
}

export default App;