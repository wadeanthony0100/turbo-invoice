const xlsx = require('xlsx');
let invoice = xlsx.readFile('./assets/Service-Invoice-Minutes.xlsx');

console.dir(invoice, {colors: true});
