const express = require('express');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware

app.use(express.json());
app.use("/auth", authRoutes)

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'ShopSmart Backend is running',
    timestamp: new Date().toISOString()
  });
});

// Root Route (optional, just to show something)
app.get('/', (req, res) => {
  res.send('ShopSmart Backend Service');
});

module.exports = app;
