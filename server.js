const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist/movie-app-project`));

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});