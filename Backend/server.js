import express from "express"

const app = express()

const port = process.env.port || 5000;

//Get a list of 5 jokes

app.get('/api/jokes', (req, res) => {

const jokes = [
{
    id:1,
    address:"1.2.3.4.",
    joke: "Joke number 1"
},

{
    id: 2,
    address: "i1ie-9",
    joke: "Joke number 2"

},

{
id: 3,
address: "0-i00-q93r0-q9e0-9",
joke: "Joke number 3"
},

{
id: 4,
address: "LEJCLWJACLJLJLNK",
joke:"joke number 4"
}
]
res.send(jokes)

})

app.listen(port, () => {

console.log(`App is listening on the ${port}`)
})