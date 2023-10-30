const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// ---    /shoppinglist router
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "shoppinglist" ORDER BY "purchased", "name";'
    pool.query(queryText)
    .then((result) => {
        console.log('GET shopping list success');
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('GET request error', error);
        res.sendStatus(500);
    })
})

router.post('/', (req,res) => {
    const item = req.body;
    let queryText = `INSERT INTO "shoppinglist" ("name", "quantity", "unit")
                    VALUES ($1, $2, $3);`;
    pool.query(queryText, [item.name, item.quantity, item.unit])
    .then((result) => {
        console.log('inserted item into database');
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error in sending database query: ${queryText}`, error);
        res.sendStatus(500);
    })
})
module.exports = router