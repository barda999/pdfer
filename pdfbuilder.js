function builder(dataCallback, endCallback){
    const PDFDocument = require('pdfkit');
      
    // Create a document
    const doc = new PDFDocument();

    doc.on('data', dataCallback, endCallback);
    
    // Embed a font, set the font size, and render some text
    doc
      .font('fonts/PalatinoBold.ttf')
      .fontSize(25)
      .text('Some text with an embedded font!', 100, 100);
     
    // Finalize PDF file
    doc.end();
}

export {builder}