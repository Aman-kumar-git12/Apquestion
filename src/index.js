const fs = require('fs')
const path = require('path')
const inputfilePath = path.join(__dirname , "input.txt")
const outputfilePath = path.join(__dirname , "output.txt")

let finalNum = 0;
fs.readFile(inputfilePath , 'utf8', (err, data)=>{
    const eachLine = data.split('\n')
    for (let ele in eachLine){
        const num = eachLine[ele].split(" ")[1]
        finalNum += Number(num)
    }
    
})
fs.writeFileSync(outputfilePath, finalNum.toString())







