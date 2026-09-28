const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
const port=3000;
const db=require('./db.js');
const Product = require('./models/product.model.js')
const Category = require('./models/category.model.js')
app.use(bodyParser.json());

// #CRUD operations

// product

app.post("/products", async (req, res) => {
    try{
        const productCreated = new Product(req.body);
        await productCreated.save();
        res.status(201).json(productCreated);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

app.get("/products", async (req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

app.get("/products/:id", async (req, res) => {
    try{
        const products = await Product.findById(req.params.id);
        res.status(200).json(products);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

app.put("/products/:id", async (req, res) => {
    try{
        const productUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
          res.status(200).json(productUpdated);
      }catch(err){
          res.status(400).json({message:err.message});
      }
});

app.delete("/products/:id", async (req, res) => {
    try{
        const productDeleted = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "product deleted successfully",productDeleted});
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

//category

app.post("/categories", async (req, res) => {
    try{
        const categoryCreated = new Category(req.body);
        await categoryCreated.save();
        res.status(201).json(categoryCreated);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

app.get("/categories", async (req, res) => {
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

app.get("/categories/:id", async (req, res) => {
    try{
        const categories = await Category.findById(req.params.id);
        res.status(200).json(categories);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

app.put("/categories/:id", async (req, res) => {
    try{
        const categoryUpdated = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
          res.status(200).json(categoryUpdated);
      }catch(err){
          res.status(400).json({message:err.message});
      }
});

app.delete("/categories/:id", async (req, res) => {
    try{
        const categoryDeleted = await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"category deleted successfully",categoryDeleted});
    }catch(err){
        res.status(400).json({message:err.message});
    }
});
app.listen(port,()=>console.log(`server is running on ${port}`));
