// Import Express framework
const express = require("express");

const app = express();

// Enable CORS for all origins
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Addition API endpoint
app.get("/api/add/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const result = a + b;
    res.json({ result });
});

// Health check endpoint for monitoring
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// Start server on dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));