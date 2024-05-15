const http = require('http');
const { countStudents } = require('./3-read_file_async'); // Importing the countStudents function from 3-read_file_async.js

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        const dbPath = process.argv[2];
        countStudents(dbPath)
            .then(messages => {
                messages.forEach(message => {
                    res.write(message + '\n');
                });
                res.end();
            })
            .catch(error => {
                res.end(error.message);
            });
    }
    res.end(); 
});

app.listen(1245);

module.exports = app;
