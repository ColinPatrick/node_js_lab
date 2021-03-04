const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp('https://reddit.com/r/popular.json')
.then(res => JSON.parse(res))
.then(items => {
    items.data.children.forEach(posts => {
        if (path.extname(posts.data.url) === '.jpg' || path.extname(posts.data.url) === '.gif' || path.extname(posts.data.url) === '.png') {
            
            let ext = path.extname(posts.data.url);
            let fileName = `${posts.data.id}${ext}`;
            
            rp(posts.data.url, { encoding: 'binary' })
            .then(file => {
                fs.writeFile(path.join(__dirname, `./downloads/${fileName}`), file, { encoding: 'binary' }, (err) => {
                    if(err) console.log(err);
                });
            });
        } else {
            console.log('nope');
        }
    });
});