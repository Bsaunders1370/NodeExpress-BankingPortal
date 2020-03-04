const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const accounts = JSON.parse(accountData);