import express, { Application, Request, Response } from 'express';
const connectDB = require('./db/db');
const cors = require('cors');

// import { createProxyMiddleware } from 'http-proxy-middleware';

const app: Application = express()
app.use(express.json());
app.use(cors())


// connection db 
connectDB();

// Router
const producRouter = require('./routes/product.routes')

app.use('/api/v1', producRouter)


// app.get('/', (req:Request, res:Response) => {
//     res.send({
//         "msg" : "is the first api section",
//     })
// })


// module.exports = () => {
//     app.use('/api', createProxyMiddleware({
//         target: 'http://localhost:5000',
//         changeOrigin: true
//     }))
// }
let port = process.env.PORT || 5000;


app.listen(port, () => console.log('server running on port 🧑‍💻' + port ))