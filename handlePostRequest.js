const handlePostRequest = (req, res) => {
  const path = req.url

  if (path === '/courses/programming/') {
    let body = ''

    req.on('data', content => {
      console.log('The following data has been received');
      body += content.toString()
      console.log(body);
    })

    req.on('end', () => {
      console.log('The request is over');
    })

    return res.end('El servidor a recibido una solicitud POST para ' + path)
  } else {
    res.codeStatus = 404
    return res.end('Not Found')
  }
}

module.exports = handlePostRequest