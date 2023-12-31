const Catalogue = require("../src/productCatalogue");
const Product = require("../src/product");
// Setup
let cat = new Catalogue("Test Catalogue");
const p123 = new Product("A123", "Product 1", 100, 10, 10.0);
const p124 = new Product("A124", "Widget 1", 100, 10, 10.0);
const p125 = new Product("A125", "A Product 2", 100, 10, 10.0);
const p126 = new Product("A126", "A Widget 2", 100, 10, 10.0);
const p127 = new Product("A127", "Bracket 1", 100, 10, 10.0)
const p128 = new Product("A128", "Another Product 3", 100, 10, 10.0);
let response

console.log('Test addProduct')
console.log("\tWhen we add a product, then it will return true")
response = cat.addProduct(p123);
// Expectation
if (response === true)
  console.log('\tPassed')
else
  console.log('\tfailed')

console.log("\tWhen we add a product whose id matches an existinf one, then it will return false")
response = cat.addProduct(new Product("A123", "Product X", 100, 10, 10.0));
// Expectation
if (response === false)
  console.log('\tPassed')
else
  console.log('failed')

//================================

cat = new Catalogue("Test Catalogue");
console.log('Test findProductByNameLike')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);

let substring = "Product";
console.log("\tGiven the catalogue has some products, when we provide a substring that has matches, then it returns the correct products")
let matches = cat.findProductsByNameLike(substring);
// Expectation
if (matches.length !== 3)
  console.log('\tFailed')
if (matches[0].name === p123.name && matches[1].name === p125.name && matches[2].name === p128.name)
  console.log('\tPassed')
else
  console.log('\tFailed')

substring = "No match";
console.log("\tGiven the catalogue has some products, when we provide a substring that has no matches, then it returns an empty array")
matches = cat.findProductsByNameLike(substring);
// Expectation
if (matches.length === 0)
  console.log('\tPassed')
else
  console.log('\tFailed')

cat = new Catalogue("Test Catalogue");
substring = "Product";
console.log("\tGiven the catalogue is empty, when we provide a substring, then it returns an empty array")
matches = cat.findProductsByNameLike(substring);
if (matches.length === 0)
  console.log('\tPassed')
else
  console.log('\tFailed')

//================================

cat = new Catalogue("Test Catalogue");
console.log('Test removeProductById')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);

let removeResponse;

console.log("\tWhen it finds a match for the id parameter and remove a product, then it will return true")
removeResponse = cat.removeProductById("A125");
// Expectation
if (removeResponse === true)
  console.log('\tPassed')
else
  console.log('\tfailed')

console.log("\tWhen it doesn't find a match for the id parameter, then it will return false")
removeResponse = cat.removeProductById("A100");
if (removeResponse === false)
  console.log('\tPassed')
else
  console.log('\tfailed')

//================================

cat = new Catalogue("Test Catalogue");
console.log('Test checkReorder')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);
console.log('\tWhen nothing needs reordering, then the array will be empty.')
console.log('\tcheckReorder: ' + JSON.stringify(cat.checkReorder()));

const p129 = new Product("A123", "Product 1", 9, 10, 10.0);
const p130 = new Product("A124", "Widget 1", 11, 10, 10.0);
const p131 = new Product("A125", "A Product 2", 10, 10, 10.0);
const p132 = new Product("A126", "A Widget 2", 8, 10, 10.0);
const p133 = new Product("A127", "Bracket 1", 12, 10, 10.0)
const p134 = new Product("A128", "Another Product 3", 5, 10, 10.0);
cat = new Catalogue("Test Catalogue");
cat.addProduct(p129);
cat.addProduct(p130);
cat.addProduct(p131);
cat.addProduct(p132);
cat.addProduct(p133);
cat.addProduct(p134);
console.log('\tThe productIds array contains the ids of the products that need reordering')
console.log('\tcheckReorder: ' + JSON.stringify(cat.checkReorder()));
