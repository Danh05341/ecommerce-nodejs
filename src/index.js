const path = require('path')
const express = require('express')
require('dotenv').config({ path: 'src/.env' })
const handlebars = require('express-handlebars')
const app = express()
port = process.env.PORT ?? 3000
const route = require('./routes')
const db = require('./config/db')

//Template engine 
app.engine(
  'hbs',
  handlebars.engine({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,
      },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// file tĩnh
app.use(express.static(path.join(__dirname, 'public')))

route(app)
db.connect()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})