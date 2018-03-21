const fs = require('fs');
const dataset = require('./data/data.json');

let finalData = [];

for (let i = 0; i < dataset.length; i++) {
    let row = dataset[i];
    // China is 3 and United States is 19
    if (row.country == 19 || row.country == 3) {
        finalData.push(row);
    }
}

console.log(`New data length: ${finalData.length}`);

fs.writeFile('./finalData.json', JSON.stringify(finalData), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('New dataset created');
});
