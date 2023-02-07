const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require('cors')
app.use(cors())



// For saving the data to the database 
app.post('/api/booking', async (req, res) => {
    try {
        const booking = await connection.create(req.body)
        res.send("Data Added")
    } catch (error) {
        console.error("An error occurred:", error);
        res.send(error)
    }

})



// For getting the data
app.get('/', async (req, res) => {
    let data = await connection.find()
    res.send(data)
})


// for deleteing the data
app.delete('/:id', async (req, res) => {
    let id = req.params.id
    await connection.deleteOne({ uid: id }, () => {
        res.send(`Deleted`)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   