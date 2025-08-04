// src/index.js
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/book/:category/:id', (req, res) => {
  const{category, id} = req.params 
  res.send(`Book category is : ${category}, ID: ${id}`)
});

app.get('/user/:id', (req, res)=>{
    const id = req.params.id;
    res.json({message: `user id id: ${id} `})
})

app.listen(PORT, () => {
  console.log(`🚀  Server running on port ${PORT}`);
});
