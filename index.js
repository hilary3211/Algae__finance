const TronWeb = require('tronweb');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

app.use(express.static(__dirname + '/public'));


const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.nile.trongrid.io");
const solidityNode = new HttpProvider("https://api.nile.trongrid.io");
const eventServer = new HttpProvider("https://api.nile.trongrid.io");

const privateKey = process.env.PRIVATEKEY; 
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);


let contractAddress = process.env.CONTRACTADDRESS 

let Owner_Address = process.env.OWNERADDRESS;
const rate = 10; //Daily ROI.


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', {CTAdress : contractAddress, refid : Owner_Address, rate : rate, owner : Owner_Address});
});
app.get('/refer/:RefAdd', async function(req, res) {
    res.render('index.ejs', {CTAdress : contractAddress, refid : req.params.RefAdd, rate : rate, owner : Owner_Address});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
