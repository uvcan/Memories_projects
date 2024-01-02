import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

// app.use('/',import('./routes/index'));


const CONNECTION_URL='mongodb+srv://javascriptmastry:javascriptmastry123@cluster0.9oyxvwz.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL,{})
.then(()=>app.listen(PORT,()=>console.log(`Server is running on ${PORT}`)))
.catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify',false);








