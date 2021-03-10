import { Router } from 'express'

const api = Router()

api.get('/task/:id', (_req, res) => {
    const id = parseInt(req.params.id, 10)

    const userverif =  pokedex.find(c => userId === id);

    res.json({ data: { task } })
})

export default api