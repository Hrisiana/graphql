import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();



const express = require('express');

const app = express();
const port = 3000;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(()=>{
  console.log("Connected to MongoDB");
}).catch(error => console.log(error));

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL({
      schema,
      graphiql: true
  })
)

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Pit'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});



app.listen(PORT, ()=> {
  console.log(`Server running at: ${PORT}`)
})