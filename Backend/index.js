const express = require('express');
const mongoose = require('mongoose');
const Form = require('./models/form.models'); // Make sure the path to your model file is correct
const app = express();

const cors = require("cors");

//cors
const corsOptions = {
    origin : "http://localhost:5173",
    methods : "GET , POST , PUT , DELETE , PATCH , HEAD",
    credentials : true,
}
app.use(cors(corsOptions));


// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello Sneha :) HI');
});

app.post('/api/form', async (req, res) => {
    try {
        // Assuming you have form fields named 'name' and 'phone'
        const { name, phone , service} = req.body;

        // Create a new Form instance with the form data
        const form = await Form.create({
            name,
            phone,
            service,
            // Add other fields as needed
        });

        // Log the created form (optional)
        console.log('Form data saved:', form);

        res.status(200).json(form);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://ajit12345:ajit12345@magicscale.xw8s5gm.mongodb.net/MagicScale?retryWrites=true&w=majority&appName=magicscale')
    .then(() => {
        console.log("Database connected successfully");
        app.listen(8000, () => {
            console.log("Server is running on Port 8000");
        });
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err);
    });
