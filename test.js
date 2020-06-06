const fs = require("fs").promises


let promise1 = fs.writeFile("test1.txt", "")
let promise2 = fs.writeFile("test2.txt", "")

let allPromises = [promise1, promise2]

Promise.all(allPromises).then(process.exit)
