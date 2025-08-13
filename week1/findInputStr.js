const crypto = require('crypto');


// function to find an input string that produce a hash start 
function hashStart(prefix){
    let input = 0; 
    while(true){
        let inputstr = input.toString();
        const hash = crypto.createHash('sha256').update(inputstr).digest('hex')
        
        if(hash.startsWith(prefix) ){
            return {input: inputstr, hash: hash }
        }
        input++;
    }
    
}

let result = hashStart('000');
console.log(`The Input value should be: ${result.input}`)
console.log(`The Hasing code is : ${result.hash}`);

console.log("hey...");