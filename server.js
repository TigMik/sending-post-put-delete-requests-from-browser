import express from 'express';

const app = express();

app.use(express.static("public"));
app.use(express.json())

let students = [
    {
        id: 1,
        name: 'Jack'
    },
    {
        id: 2,
        name: 'Joe'
    }
]

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.get('/students', (req, res) => {
    res.send(students);
});

app.post('/students', (req, res) => {
    const { name } = req.body;
    
    const student = {
        id: Date.now(),
        name
    }   
    // console.log('req.body.name', req.body.name);

    // console.log('student', student);

    students.push(student);
})

app.put('/students/:id', function (req, res) {
    const student = students.find( student => student.id === Number(req.params.id));
    if (student) {
        student.name = req.body.name;
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    } 
})

app.delete('/students/:id', function (req, res) {
    students = students.filter(student => student.id !== Number(req.params.id));
    res.sendStatus(200);
});


app.listen(3000, () => {
    console.log('server started on port 3000');
})


