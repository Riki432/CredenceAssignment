const express = require('express');
const app = express();
require('dotenv').config();

const baseApi = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';

const baseAPI = `api.openweathermap.org/data/2.5/weather?q=London&APPID=${process.env.API_KEY}`;




app.use((req, res) => {
    res.status(200).json({
        message: "Hello World!",
    });  
});

app.get('/weather', async (request, response)  => {
    console.log(request);
    const res = await fetch(baseAPI);
    const jsonRes = res.json();
    console.log(jsonRes); 
});

module.exports = app;