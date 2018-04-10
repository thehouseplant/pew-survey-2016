const _ = require('lodash');
const dataset = require('./data/dataset.json');
const fs = require('fs');

// Chosen questions by country
let combinedQuestions = [
    'ID', 'country', 'q3', 'Q10A', 'Q10B', 'Q24B', 'Q27A', 'Q27B', 'Q27C', 'Q27D', 'Q27E', 'Q27F', 'q56'
];
let chinaQuestions = [
    'ID', 'country', 'Q2', 'Q4', 'Q5', 'Q6', 'Q6N', 'Q7', 'Q23', 'Q30', 'Q46a', 'Q46b', 'Q46c'
];
let usQuestions = [
    'ID', 'country', 'Q24A', 'Q85A', 'Q85B', 'Q85C', 'Q85D', 'q100us'
];

// Placeholder arrays for responses
let chineseData = [];
let usData = [];
let combinedData = [];

// Loop through the dataset and clean out irrelevant responses and questions
for (let i = 0; i < dataset.length; i++) {
    let row = dataset[i];

    // Chinese responses
    if (row.country == 3) {
        let cleanedRow = _.pick(row, chinaQuestions);
        chineseData.push(cleanedRow);
    }

    // US respones
    if (row.country == 19) {
        let cleanedRow = _.pick(row, usQuestions);
        usData.push(cleanedRow);
    }

    // Combined responses
    if (row.country == 3 || row.country == 19) {
        let cleanedRow = _.pick(row, combinedQuestions);
        combinedData.push(cleanedRow);
    }
}

// Write Chinese dataset
fs.writeFile('./chineseData.json', JSON.stringify(chineseData), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Chinese dataset created with length of ${chineseData.length} rows`);
});

// Write US dataset
fs.writeFile('./usData.json', JSON.stringify(usData), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`US dataset created with length of ${usData.length} rows`);
});

// Write combined dataset
fs.writeFile('./combinedData.json', JSON.stringify(combinedData), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Combined dataset created with length of ${combinedData.length} rows`);
});
