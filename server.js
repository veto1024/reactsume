const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const puppeteer = require('puppeteer');
const pdfTemplate = require('./template');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time)
  });
}
// POST Route - PDF generation and fetching of the data
async function printPDF(content) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox",
      "--disable-setuid-sandbox"],
    headless: true });
  const page = await  browser.newPage();

  await page.setContent(content);

  await page.pdf({path: "OMD-Resume.pdf", printBackground: true, format: 'A4' }).catch(error => console.log("ERROR" + error));
  await browser.close();

}

app.post('/create-pdf', (req, res) => {
   const pdfContent = pdfTemplate(req.body);
   printPDF(pdfContent).then(
     res.send(Promise.resolve())
   )
});


// Get - Send generated pdf to the client
app.get('/fetch-pdf', (req,res) => {
  setTimeout(function () {
    res.sendFile(`${__dirname}/OMD-Resume.pdf`);
  }, 2000);

});


// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.listen(port, () => console.log(`Server started on port ${port}`));
