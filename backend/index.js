import express from 'express'
// import { PORT } from './config.js'
import mongoose from 'mongoose'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'
import 'dotenv/config';


const app = express()
const port = process.env.PORT || 5555;

//Middleware for parsing request body
app.use(express.json())


//Middleware for handling CORS policy
//option 1: Allow all origins with default of cors(*)
app.use(cors())
//option 2: Allow custom origins
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send('Welcome to Mern Stack')
})

app.use('/books', booksRoute)

//Connection to mongodb using mongoose
mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@book-store-db.ifl4kzi.mongodb.net/books-collection?retryWrites=true&w=majority&appName=book-store-db`).then(() => {
    console.log('App connected to database');
    app.listen(port, () => {
        console.log(`App is listening to port: ${port}`);
    })
}).catch((error) => {
    console.error(error);
})



