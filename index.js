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
const privateKey = '6827f8311ceb88b527e8e92b15707a62cbfbbbe1e2e86f2396378d4f3bba6d22'
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);

let contractAddress = 'TBYPFtWDneaGXPsBxK5NR3GgEEZfqyhoVh'
let Owner_Address = 'TKLBAcPyyctM8cL5ysRo7zVgNtarQh9Hyt'

const rate = 10; //Daily ROI.

// app.set('view engine', 'ejs');
// app.set('view engine', 'ejs');
// ///////////// English
// app.get('/', (req, res) => {
//     res.render('index.ejs', {CTAdress : contractAddress, refid : Owner_Address, rate : rate, owner : Owner_Address});
// });
// app.get('/refer/:RefAdd', async function(req, res) {
//     res.render('index.ejs', {CTAdress : contractAddress, refid : req.params.RefAdd, rate : rate, owner : Owner_Address});
// });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { CTAddress: contractAddress, refid: ownerAddress, rate: rate, owner: ownerAddress });
});

app.get('/refer/:RefAdd', (req, res) => {
    res.render('index', { CTAddress: contractAddress, refid: req.params.RefAdd, rate: rate, owner: ownerAddress });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
