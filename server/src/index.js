import express from 'express';
import mongoose from 'mongoose'
import path from 'path'
import coursRouter from './routes/cours';
import cors from 'cors';

const Port = process.env.PORT || 5000


const app = express()

app.use(cors())

mongoose.connect('mongodb://localhost/level1');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
console.log('Connecté a MongoDB !')
});

app.use(express.static(path.join(__dirname,'public')));
app.use(express());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("ciao")
})

app.use('/cours', coursRouter)




app.listen(Port, ()=> {
    console.log("app is listen on port 5000")
})