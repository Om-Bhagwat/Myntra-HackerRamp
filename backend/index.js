const app = require('./app')
var cors = require('cors')
app.use(cors())

// const port = 3003

const port =process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
