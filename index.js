const express = require('express');
const courses = require('./data/courses.json');
const coursesDetails = require('./data/coursesDetails.json')
const cors = require('cors');


const port = process.env.PORT || 5000;


const app = express();
app.use(cors())


app.get('/', (req, res) => {
    res.send('Online Learning Platform Server');
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course', (req, res) => {
    res.send(coursesDetails)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selected = coursesDetails.find(course => course.id === id)
    res.send(selected)
})

app.listen(port, () => {
    console.log('online learning platform is runnnig is', port)
})