const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render("index")
})

const projectList = [  //load database kat sini
  {
    logo: 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/5d6266e7bbcdb8fb017c10000ead2fd3.png',
    company: 'Kicap ABC Sdn Bhd',
    description: 'Teaching a school of Life a thing or two',
    tech: 'mobile app / website',
    category: 'lifestyle'
  },
  {
    logo: 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/01273596e4e92b9de8e8a11cd4ed455e.png',
    company: 'Medicare Construction',
    description: 'You do you',
    tech: 'website',
    category: 'Medical'
  },
  {
    logo: 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/67cbe9b74baf7f893488c5fc426d31eb.png',
    company: 'GameHub Enterprise',
    description: 'Play to succeed',
    tech: 'game',
    category: 'Entertainment'
  }
]

app.get('/projects', (req, res) => {
  res.render("projects", { projects: projectList })
}) 

app.listen(port, () => {
  console.log(`Kickpush-clone listening at http://localhost:${port}`)
})

//tukar res.send to res.render("index")// 