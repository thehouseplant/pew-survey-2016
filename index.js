const _ = require('lodash');
const dataset = require('./data/dataset.json');
const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;

let chosenQuestions = [
    'ID','country','survey', 'Q2', 'q3', 'Q4', 'Q5', 'Q6', 'Q6N', 'Q7', 'Q23', 'Q24A', 'Q24B', 'Q27A', 'Q27B', 
    'Q27C', 'Q27D', 'Q27E', 'Q27F', 'Q30', 'Q46a', 'Q46b', 'Q46c', 'q56', 'Q85A', 'Q85B', 'Q85C', 'Q85D', 'q100us'
];
let finalData = [];

for (let i = 0; i < dataset.length; i++) {
    let row = dataset[i];

    // China is 3 and United States is 19
    if (row.country == 19 || row.country == 3) {
        let cleanedRow = _.pick(row, chosenQuestions);
        finalData.push(cleanedRow);
    }
}

fs.writeFile('./finalData.json', JSON.stringify(finalData), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`New dataset created with length of ${finalData.length} rows`);
});

/*
try {
    const parser = new Json2csvParser(opts);
    const csv = parser.parse(finalData);
    console.log(csv);
} catch (err) {
    console.error(err);
}
*/
