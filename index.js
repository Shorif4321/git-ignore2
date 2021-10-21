const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello form node fourth time practice by ali')
})
// array of object
const users = [
    { id: 0, name: 'Ali', phone: 123456, address: 'Rajshahi bagmara', email: "alis@gmail.com" },
    { id: 1, name: 'Lala', phone: 1234545, address: 'Rajshahi mohonpur', email: "as@gmail.com" },
    { id: 2, name: 'Shorif', phone: 12345647, address: 'Rajshahi boyalia', email: "li@gmail.com" },
    { id: 3, name: 'Iyouf', phone: 12345641, address: 'Rajshahi godagari', email: "is@gmail.com" },
    { id: 4, name: 'Imran', phone: 12345612, address: 'Rajshahi tanor', email: "al@gmail.com" },
]

//post.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body)
    //res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)

})

app.get('/users', (req, res) => {
    //query parameters search 
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)

    }
    else {
        res.send(users)
    }
})

app.listen(port, () => {
    console.log("listening to port", port)
})