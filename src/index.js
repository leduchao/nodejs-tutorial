const express = require('express');
const app = express();
// const mysql = require('mysql');
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

app.listen(port, () => console.log("Server is running @ http://localhost:3000"));

app.use(express.static(path.join(__dirname, 'public')));

// http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

// var conn = mysql.createConnection({
//   host: 'localhost',
//   user: "root",
//   passworrd: '',
//   database: 'test'
// });

// conn.connect((err) => {
//   if (err) throw err;
//   console.log("Database connected!");
// });

// var sql = "UPDATE student SET student_name='Nguyen Van An' WHERE student_id=2";
// conn.query(sql, (err) => {
//   if (err) throw err;
// });

// app.get('/public/home.html', (req, res) => {
//   var sql = "SELECT * FROM student";
//   conn.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });


// const server = require('http').Server(app)
// const io = require('socket.io')(server)
// const { v4: uuidV4 } = require('uuid')

// app.set('view engine', 'ejs')
// app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.redirect(`/${uuidV4()}`)
// })

// app.get('/:room', (req, res) => {
//   res.render('room', { roomId: req.params.room })
// })
// server.listen(3000)