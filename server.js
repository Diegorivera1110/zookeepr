const fs = require("fs");
const path = require("path");
const express = require("express");
const { animals } = require("./data/animals.json");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// app.get("/animals", (req, res) => {
//   let results = animals;
//   if (req.query) {
//     results = filterByQuery(req.query, results);
//   }
//   res.json(results);
// });


// app.get("/animals/:id", (req, res) => {
//   const result = findById(req.params.id, animals);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });


// app.post("/animals", (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = animals.length.toString();

//   // if any data in req.body is incorrect, send 400 error back
//   if (!validateAnimal(req.body)) {
//     res.status(400).send("The animal is not properly formatted.");
//   } else {
//     const animal = createNewAnimal(req.body, animals);
//     res.json(animal);
//   }
// });


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.get('/animals', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/animals.html'));
// });

// app.get('/zookeepers', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/zookeepers.html'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
