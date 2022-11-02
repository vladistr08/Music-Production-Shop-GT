const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('views'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
