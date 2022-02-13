const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


//Testauksen helpottamiseksi hardkoodattu yksi tuote
const productList = [
    {
        "id" : uuidv4(), 
        "name" : "iPhone",
        "manufacturer" : "Apple", 
        "category" : "Phones", 
        "description" : "Hyvä puhelin", 
        "price" : 799, 
    }
];



//CREATE new product
router.post('/', (req, res) => {
    console.log(req.body);

    productList.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    });
    res.sendStatus(201);
})

//GET all products
router.get('/', (req, res) => {
    res.json(productList);
});

//GET one product by ID/name/manufacturer/category
router.get('/:productId', (req, res) => {
    let foundIndex = productList.findIndex(p => p.id === req.params.productId || p.name == req.params.productId || p.manufacturer == req.params.productId || p.category == req.params.productId);
    
    if(foundIndex === -1){
        res.sendStatus(404);
        return;
    }else {
        res.json(productList[foundIndex]);
    }
})

//MODIFY product
router.put('/:productId', (req, res) => {
    let foundProduct = productList.find(p => p.id === req.params.productId);
    if(foundProduct){
        foundProduct.name = req.body.name;
        foundProduct.manufacturer = req.body.manufacturer;
        foundProduct.category = req.body.category;
        foundProduct.description = req.body.description;
        foundProduct.price = req.body.price;
        res.sendStatus(202);
    }else{
        res.sendStatus(404);
    }
})

//SEARCH by name
router.get('/:productName/:manufacturer', (req, res) => {
    let foundName = productList.find(p => p.name == req.params.productName || p.manufacturer == req.params.manufacturer);
    
    if(foundName){
        res.json(foundName);
        return;
    }else {
        console.log("Fak");
        res.sendStatus(404);
        
    }
})

module.exports = router;