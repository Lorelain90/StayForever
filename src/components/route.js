const http = require ('http')
const { default: pisos } = require('../../public/data')

const app = http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end(JSON.stringify(pisos))
})

const PORT = 300
app.listen(PORT)
console.log(`Server running on port ${PORT}`)