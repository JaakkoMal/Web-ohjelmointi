const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const productList = require('./routes/products');
const users = require('./routes/user');
const invoices = require('./routes/purchase');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/products', productList);
app.use('/user', users);
app.use('/purchase', invoices);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})