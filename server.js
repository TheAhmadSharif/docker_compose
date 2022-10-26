var http = require('http');

//create a server object:




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = {
    name: 'sample-express-app',
    port: 8001,
    host: '0.0.0.0',
};

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
     res.status(200).send("Hello from  " + req.client.remoteAddress + ":" + req.client.remotePort + " to " + req.client.localAddress + ":" + req.client.localPort);
});


app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
});