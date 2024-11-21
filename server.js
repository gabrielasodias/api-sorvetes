import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.post('/sabores', async (req, res) => {

    await prisma.sabores.create({
        data: {
            tipoSorvete: req.body.tipoSorvete,
            sabor: req.body.sabor,
            quantidade: req.body.quantidade
        }
    })

    res.status(201).json(req.body)
    
})

app.get('/sabores', async(req, res) => {

    let sabores = []
    
    if (req.query) {
        sabores = await prisma.sabores.findMany({
            where: {
                tipoSorvete: req.query.tipoSorvete,
                sabor: req.query.sabor
            }
        })   
    } else {
        sabores = await prisma.sabores.findMany()
    }

    res.status(200).json(sabores)
})

app.put('/sabores/:id', async (req, res) => {

    await prisma.sabores.update({
        where: {
            id: req.params.id
        },
        data: {
            tipoSorvete: req.body.tipoSorvete,
            sabor: req.body.sabor,
            quantidade: req.body.quantidade
        }
    })

    res.status(201).json(req.body)
    
})

app.delete('/sabores/:id', async (req, res) => {

    await prisma.sabores.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: 'Sabor deletado com sucesso'})
})

app.listen(process.env.PORT || 3000)

