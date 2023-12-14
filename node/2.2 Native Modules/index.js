const fs = require('fs')

fs.writeFile('newMsg.txt', 'Hello from Boluwtife.', (err) =>{
    if (err) throw err
    console.log('File has been saved!')
})

fs.readFile('newMsg.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 