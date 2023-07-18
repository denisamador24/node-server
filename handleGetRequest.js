const courses = require('./courses')
const fs = require('fs')

const HTML_PAGE = fs.readFileSync(__dirname+'/index.html')

const handleGetRequest = (req, res) => {
  const path = req.url

  switch (path){
    case '/': 
      res.setHeader("Content-Type", "text/html");
      return res.end(HTML_PAGE)

    case '/courses': 
      return res.end(JSON.stringify(courses))

    case '/courses/programming':
      return res.end(JSON.stringify(courses.programacion))

    case '/courses/math':
      return res.end(JSON.stringify(courses.matematicas))

    default:
      return res.end('<h1>Not Found</h1>')
  }

}

module.exports = handleGetRequest