const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myportfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
