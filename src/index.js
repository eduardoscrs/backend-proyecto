import express from "express"
import userRoutes from "./routes/usuarios.routes.js"
import rutasproducto from "./routes/productos.routes.js"
const PORT = 3000

const app = express()

app.use(express.json())
app.use('/api',userRoutes)
app.use('/api',rutasproducto)

app.use((req,res,next)=>{
    res.status(404).json({message:"Endpoint not found"})
})

app.listen(3000)
console.log(`http://localhost:${PORT}/api/usuarios`)
