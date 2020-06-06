const fs = require("fs")

fs.writeFile("test1.txt", "", () => {})
fs.writeFile("test2.txt", "", () => {})

process.exit()
