require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expenseRoutes = require('./routes/expenseRoutes');
const settlementRoutes = require('./routes/settlementRoutes');

const app = express();
app.use(express.json());

app.use('/', expenseRoutes);
app.use('/', settlementRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => app.listen(process.env.PORT||8080, () => console.log(`Server running on port ${process.env.PORT}`)))
.catch(err => console.error('MongoDB connection error:', err));
