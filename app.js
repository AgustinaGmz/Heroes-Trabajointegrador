let express =require('express');
let app = express();
let routes = require('./routes/index.js')
const path = require('path');
const PORT = 3030;
app.use(express.static("public"))



app.get('/', function(request, response) {
    res.senFile(path.join(__dirname, "/views/index.html"))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '/public/css'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '/public/img'))
})


app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));




