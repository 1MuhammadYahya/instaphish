const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.json());

port = 8080;

app.listen(port, () => { console.log(`Listening at localhost:${port}`) ;} )

app.use('/api/capture', ( req, res ) => { capture( req, res ); });

function capture(req, res){
    console.log(req.body);
}