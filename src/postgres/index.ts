import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

type UserDTO = {
    name?: string;
    email: string;
}

app.get('/users', async (req: Request, res: Response) => {
    const allUsers = await prisma.user.findMany();
    res.send(allUsers)
})

app.post('/users', async (req: Request, res: Response) => {
    const data: UserDTO = req.body;
    
    const user = await prisma.user.create({
        data: {
            email: data.email,
            name: data.name
        }
    })
    
    res.send(user)
})

app.listen(3000, () => console.log('A aplicação está rodando na porta 3000'))