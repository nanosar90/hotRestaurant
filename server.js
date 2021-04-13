const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const custReserve = {

    custName: 'name',
    custPhone: 'phone',
    custEmail: 'email',
    custID: 'ID',
    custTable: 'table'

}



// Sets up the Express App

const app = express();
//Declare port
const PORT = 3000;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

require('./routes/routes.js')(app);
//start listening
app.listen(PORT, () =>  { console.log(`Listening on PORT ${PORT}`)});

