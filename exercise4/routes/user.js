const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


//Testauksen helpottamiseksi hardkoodattu yksi käyttäjä valmiiksi
const users = [
    {
        "id" : uuidv4(),
        "firstName" : "Pasi",
        "lastName" : "Mutka",
        "address" : "Pasikuja 2"
    }
];

//CREATE new user
router.post('/', (req, res) => {
    console.log(req.body);

    users.push({
        id: uuidv4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
    });
    res.sendStatus(201);
})

//GET all users
router.get('/', (req, res) => {
    res.json(users);
});



module.exports = router;