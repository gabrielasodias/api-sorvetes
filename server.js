import express from 'express'

const app = express()
app.use(express.json())

const sabores = []

app.post('/sabores', (req, res) => {

    sabores.push(req.body)

    res.status(201).json(req.body)
    
})

app.get('/sabores', (req, res) => {
    res.status(200).json(sabores)
})

app.listen(3000)

