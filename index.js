// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
   return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    throw new Error('Assignment to constant variable.');
}

