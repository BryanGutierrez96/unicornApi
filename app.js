const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const router = require('./routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
