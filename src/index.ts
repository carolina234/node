
import { Router, Request, Response } from 'express'


const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello world with typescript' })
})

app.use(route)
app.listen(2020, () => 'Server running on port 2020')

var http = require('http') , https = require('https') , express = require('express') , app = express();

http.createServer(app).listen(80); https.createServer( app).listen(443);