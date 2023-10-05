const fs = require('fs');
fs.readFile('data.json', (err, data) => {
    if (err === null){
        const jsonData = JSON.parse(data);
        const outputData = jsonData.map((item) => {
            const rate = item.rate;
            const exchangedate = item.exchangedate;
            return `${exchangedate}:${rate}`
        }).join('\n');

        fs.writeFile('output.txt', outputData, (err) =>{
            if (err === null) {
                console.log(outputData);
            }
            else{
                console.log(err);
            }
        })
    }
})