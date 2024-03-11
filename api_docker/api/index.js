import express from 'express'
// import cors from 'cors'
import {
  getAllBlogs, createBlog, deleteBlog, update,
} from './db.js'

const app = express()
const port = 3000
// This line is necessary to parse the request body
app.use(express.json())

// console.log('enable Cors');
// app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await getAllBlogs()
    res.json(blogs)
  } catch (error) {
    res.status(500).send('Error interno del servidor')
  }
})

// eslint-disable-next-line consistent-return
app.post('/blogs', async (req, res) => {
  const [title, content] = [req.body.title, req.body.content]
  if (!title || !content) {
    return res.status(400).send('Falta título o contenido en la solicitud')
  }
  console.log(title, content)
  const blogs = await createBlog(title, content)
  res.json(blogs)
})

// eslint-disable-next-line consistent-return
app.put('/blogs/:id', async (req, res) => {
  try {
    const [title, content] = [req.body.title, req.body.content]
    if (!title || !content) {
      return res.status(400).send('Falta título o contenido en la solicitud')
    }
    update(title, content)
  } catch (error) {
    res.status(500).json({ message: 'error updating the character' })
  }
})

app.delete('/blogs/:id', async (request, response) => {
  console.log('delete blog')
  const { id } = request.params
  console.log(id)
  const result = await deleteBlog(id)
  response.json(result)
})

// Middleware para manejar métodos HTTP no implementados
app.use((req, res) => {
  res.status(501).send('Método HTTP no implementado')
})