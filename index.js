const express = require('express')
const cookieParser = require("cookie-parser");
const app = express()
app.use(cookieParser());
const port = 3000

app.get('/', (req, res) => {
  console.log(req.cookies)  
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})