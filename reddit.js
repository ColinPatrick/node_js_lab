const request = require('request');
const path = require('path');
const fs = require('fs');
const dataPath = path.join(__dirname, './popular-articles.json');

let myArray = [];

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);
  
    JSON.parse(body).data.children.forEach(item => {
        myArray.push({
            title: item.data.title,
            url: item.data.url,
            author: item.data.author
        });

        fs.writeFile(dataPath, JSON.stringify(myArray, null, 2), err => {
            if(err) console.log(err);
        });

    });
}); 

