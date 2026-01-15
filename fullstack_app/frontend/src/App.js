import { useState } from "react";

function App() {
    // State for calculation result
    const [result, setResult] = useState(null);
    // Input values for addition
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    // Loading state for API call
    const [loading, setLoading] = useState(false);

    // Function to call backend API
    const callBackend = async () => {
        setLoading(true);
        // API URL - uses environment variable for production, localhost for development
        const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
        const res = await fetch(`${API_URL}/api/add/${a}/${b}`);
        const data = await res.json();
        setResult(data.result);
        setLoading(false);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, padding: 20 }}>
                <h1>Neo react + Node + C++ Demo</h1>
                <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
                <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
                <button onClick={callBackend} disabled={loading}>Add</button>
                {loading && <p>Loading... (first request may take 30s)</p>}
                {result !== null && <h2>Result: {result}</h2>}
            </div>
            <footer style={{ 
                borderTop: '1px solid #ddd', 
                padding: '20px', 
                textAlign: 'center',
                backgroundColor: '#f8f9fa',
                color: '#666'
            }}>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    © 2025 GauravisNeo. All rights reserved.
                </p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    Contact: <a href="mailto:gauravislucky@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>gauravislucky@gmail.com</a>
                </p>
            </footer>
        </div>
    );
}

export default App;