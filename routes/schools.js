const express = require('express');

const router = express.Router();
const mysql = require('../db');

//validation funtion 
function validationofData(name, address,latitude, longitude) {
    if (!name ||!address || typeof latitude !== 'number' || typeof longitude !== 'number' ) {
        return false;
    }
    return true;
}

// Add new school endpoint 
router.post('/addSchool', (req, res )=>{
    const {name, address, latitude, longitude } = req.body;
    if (!validationofData(name, address, latitude, longitude)){
        return res.status(400).send('Invalid data, name, address, latitude and longitude are required.');
    }
    const sql = 'INSERT INTO schoolInfo(name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    mysql.query(sql, [name, address, latitude, longitude], (err, result) => {
        if (err) throw err;
        res.status(201).json({message :'School added successfully ', schoolId : result.insertId});
    });
});

// Get listSchools endpoint
router.get('/listSchools', (req, res) => {
    const {latitude, longitude} = req.query;
    if (!latitude || !longitude){
        return res.status(400).send('Invalid data, latitude and longitude are required.');
    }
    const sql = `
        SELECT *, 
        ( 6371 * acos( cos( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin( radians(?) ) * sin( radians( latitude ) ) ) ) AS distance 
        FROM schoolInfo 
        ORDER BY distance ASC`; // sql query to find the distance from given latitude and longitude  **Haversine Formulae**
    mysql.query(sql, [latitude, longitude, latitude], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;
