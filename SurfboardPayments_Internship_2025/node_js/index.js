const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World')
})



app.post('/login', (req,res)=>{

    try {
        const { email, password } = req.body;

        if (email  && password) {
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
    } 
    catch (error){
        res.status(500).json({ message: "Server error", error });

    }

    }) ;

app.listen(port, () => {
  console.log(`App is running succesfully on ${port}`)
})