const path = require('path')
const express = require('express');

// console.log(__dirname);
// console.log(path.join(__dirname, '/public/index.html'));

const app = express();
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '/public')
app.use(express.static(publicDirectoryPath))


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
