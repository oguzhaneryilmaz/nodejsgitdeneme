const express = require('express');
const { get_users, get_by_username, add_user } = require('./utils/users');


const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.get("/", (req, res) => {
    res.send("<h1>Ana Sayfa</h1>")
})

app.get("/users/:username?", (req, res) => {
    const username = req.params.username
    if (username)
        res.send(get_by_username(username))
    else
        return res.send(get_users())
})

app.listen(port, () => {
    console.log("Server is running")
})

app.post("/users/add-user", (req, res) => {
    const user = req.body
    return res.send(add_user(user))
})