const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


//Testauksen helpottamiseksi hardkoodattu kaksi laskua samalla asiakas ID:llä
const invoices = [
    {
        "id" : uuidv4(),
        "productId" : "12a5",
        "customerId" : "17a",
        "sum" : 400
    },
    { 
        "id" : uuidv4(),
        "productId" : "1235",
        "customerId" : "17a",
        "sum" : 700
    }
];

//Purchase product for a user
router.post('/', (req, res) => {
    invoices.push({ 
        id: uuidv4(),
        productId: req.body.productId,
        customerId: req.body.customerId,
        sum: req.body.sum,
    });
    res.sendStatus(201);
});

//GET all invoices
router.get('/', (req, res) => {
    res.json(invoices);
});

//GET invoices of a user
router.get('/:customerId', (req, res) => {
    let foundIndex = invoices.filter(p => p.customerId == req.params.customerId);
    
    if(foundIndex.length > 0){
        res.json(foundIndex);
    }else {
        res.sendStatus(404);
    }
});

//GET a single invoice of a user
router.get('/:customerId/:invoiceId', (req, res) => {
    let foundIndex = invoices.find(p => p.customerId == req.params.customerId && p.id == req.params.invoiceId);
    if(foundIndex){
        console.log("single invoice found.");
        res.json(foundIndex);
    }else{
        console.log("no single invoice found.");
        res.sendStatus(404);
    }
});

//DELETE invoice of a user
router.delete('/:customerId/:invoiceId', (req, res) => {
    let foundIndex = invoices.find(p => p => p.customerId == req.params.customerId && p.id == req.params.invoiceId);
    if(foundIndex){
        console.log("invoice deleted.");
        invoices.splice(foundIndex, 1);
        res.sendStatus(202);
    }else{
        res.sendStatus(404);
    }
})
module.exports = router;