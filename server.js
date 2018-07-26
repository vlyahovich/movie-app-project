const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist/movie-app-project`));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/movie-app-project/index.html'));
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});