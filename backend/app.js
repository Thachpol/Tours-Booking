const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/tours', (req, res) => {
    res.status(201).json({
        message: "Tour created successfully!",
        data: req.body
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});