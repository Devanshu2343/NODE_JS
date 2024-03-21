const { log } = require('console');
const os = require('os');

//info about user
const user = os.userInfo();
console.log(user);

//method to return system uptime in sseconds
console.log(`The system uptime is ${os.uptime()} seconds` );

const type = os.type();
console.log(type);

const currentOS = {
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),

}

console.log(currentOS);
