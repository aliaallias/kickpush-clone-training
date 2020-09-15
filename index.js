const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/projects', (req, res) => {
  res.render("projects")
})

app.listen(port, () => {
  console.log(`Kickpush-clone listening at http://localhost:${port}`)
})

//tukar res.send to res.render("index")// 