const express = require('express')
const PDFDocument = require('pdfkit')
const { jsPDF }  =  require("jspdf");
const Vazirmatn = require("./Vazirmatn-Regular-normal.js");

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const doc = new PDFDocument();

  doc
  .font('Vazirmatn-Regular.ttf')
  .fontSize(25)
  .text('سلام بر شما', 100, 100); 
  
  res.setHeader('Content-disposition', 'attachment; filename=something.pdf')
  res.setHeader('Content-type', 'application/pdf')

  doc.pipe(res)
  doc.end()
})

app.get('/jspdf', (req, res) => {
  const doc = new jsPDF();

  doc.setFont('Vazirmatn-Regular')
  doc.text("سلام بر تو", 10, 10);
  
  res.setHeader('Content-disposition', 'attachment; filename=something.pdf')
  res.setHeader('Content-type', 'application/pdf')
  res.send(doc.output());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
