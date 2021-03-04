const path = require('path');
const fs = require('fs');

let chirps = [
    {
        username: "John",
        message: "I sing and play rhythm guitar for The Beatles."
    },
    {
        username: "Paul",
        message: "I sing and play bass for The Beatles."
    },
    {
        username: "George",
        message: "I play lead guitar and sing backing vocals (sometimes lead) for The Beatles."
    },
    {
        username: "Ringo",
        message: "I play drums and sometimes sing for The Beatles."
    },
    {
        username: "Colin",
        message: "I'M IN THE BEATLES TOO!"
    }
];

let chirpPath = path.join(__dirname, '../chirps.json');

fs.writeFile ("chirps.json", JSON.stringify(chirps, null, 2), function(err) {
    if(err) console.log(err);
});

fs.readFile(chirpPath, {
    encoding: "UTF-8"
}, (err, data) => {
    if(err) console.log(err);
    console.log(data);
});

