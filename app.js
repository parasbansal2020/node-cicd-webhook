const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('CI/CD from Jenkins!'));

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
