const crypto = require('crypto');

const input = "anilb";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)