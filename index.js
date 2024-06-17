const express = require('express');

const app = express();

const data = [
  {
    name: "Steven"
  },
  {
    name: "Lucas"
  },
  {
    name: "Florine"
  },
  {
    name: "Théo"
  }
]

app.get('/api/wilder', (req, res) => {
  res.status(200).json(data);
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});

module.exports = app;