require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes)
app.use("/api/cart", cartRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'ShopSmart Backend is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.send('ShopSmart Backend Service');
});

const PORT = process.env.PORT || 5001;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
