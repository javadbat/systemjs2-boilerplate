const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const port = 150

function defineRoutes(){
    app.get('/',function(req,res) {
        res.sendFile('Views/index.html', { root: path.join(__dirname, '../Client/') });
      });
    app.use('/Client',serveStatic(path.join(__dirname, '../Client')));
    app.use('/',serveStatic(path.join(__dirname, '../')));
}
defineRoutes();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

