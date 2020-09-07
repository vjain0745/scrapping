const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

const scrapers = require('./scrapers');


app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.post('/amazon', async (req, res) => {
    
    await scrapers.scrapeAmazon(req.body.url)
   
    res.send("done");
})
app.post('/youtube', async (req, res) => {
    
   const data =  await scrapers.scrapeChannel(req.body.url)
   
    await res.send(data);
})

//module.exports.server = sls(app)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))