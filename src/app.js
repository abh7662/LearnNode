const path = require('path')
const express = require('express')


const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, '../public/about.html')))

// app.get('', (req, res) => {
//     console.log('serving root ................')
//     res.send('hello express')
// })

app.get('/help', (req, res) => {
    console.log('serving help ................')
    res.send({
        name: 'abhi',
        age: 27
    })
})

app.get('/about', (req, res) => {
    res.send('hello about')
})

app.get('/weather', (req, res) => {
    res.send('hello weather')
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})