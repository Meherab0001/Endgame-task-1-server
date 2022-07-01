const express = require('express')
const app = express()
const cors=require('cors')
const port =process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(cors());
app.use(express.json())




const uri = `mongodb+srv://taskuser1:LngD4lumUp3GwhmO@cluster0.n6l8x.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    await client.connect();
    const taskCollection=client.db('tode').collection('task-todo')

        app.post('/task',async(req,res)=>{
            const newTask=req.body;
            const task=await taskCollection.insertOne(newTask)
            res.send(task)
        })
  }
  
  run();




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})