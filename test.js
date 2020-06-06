const fs = require("fs")

function writeFileSlow() {
    setTimeout(function() {
        fs.writeFile("test2.txt", "", () => {})
    }, 1000)
}

fs.writeFile("test1.txt", "", () => {})
writeFileSlow()

process.exit()
