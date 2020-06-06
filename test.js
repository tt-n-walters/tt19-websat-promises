const fs = require("fs")

function writeFileSlow() {
    setTimeout(function() {
        fs.writeFile("test2.txt", "", exit)
    }, 1000)
}

fs.writeFile("test1.txt", "", exit)
writeFileSlow()

function exit() {
    process.exit()
}
