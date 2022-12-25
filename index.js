const express = require("express");
const app = express();


const fruits = [
    { id: 1, name: "apple", price: 10, count: 12 },
    { id: 2, name: "orange", price: 12, count: 23 },
    { id: 3, name: "banana", price: 15, count: 33 },
    { id: 4, name: "kiwi", price: 8, count: 34 },
    { id: 5, name: "pear", price: 19, count: 44 },
    { id: 6, name: "grape", price: 32, count: 54 },
];


app.get("/", (_, res) => {
    res.json(fruits);
});
app.get("/:id", (req, res) => {
    const { id } = req.params;
    console.log(id)
    const fruitsWithId = fruits.filter((element) => element.id === parseInt(id));
    res.json(fruitsWithId);
});


app.listen(3000, () => {
    console.log("listening on 3000");
});