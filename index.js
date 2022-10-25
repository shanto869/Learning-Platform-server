const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send('Online Learning Platform Server');
})

app.listen(port, () => {
    console.log('online learning platform is runnnig is', port)
})