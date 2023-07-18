const http = require('http')
const handleGetRequest = require('./handleGetRequest.js')
const handlePostRequest = require('./handlePostRequest.js')

const PORT = 3000

const server = http.createServer((req, res) => {
  const { method } = req

  switch(method) {
    case 'GET':
      return handleGetRequest(req, res)

    case 'POST':
      return handlePostRequest(req, res)

    default:
      console.log('The method is not handled by the server: ' + method);
  }
})

server.listen(PORT, () => {
  console.log('\nServer is running in http://localhost:' + PORT);
})