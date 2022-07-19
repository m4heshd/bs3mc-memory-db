const bs3mc = require('better-sqlite3-multiple-ciphers');
const db = bs3mc(':memory:');

db.pragma("rekey='password'");

console.log('🥳');
