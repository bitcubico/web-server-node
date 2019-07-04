const http = require('http');

const port = 3000;

http.createServer((req, res) => {
    // Indico que la respuesta estará dada en formato Json
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let data = {
        Nombres: 'Mauricio',
        Apellidos: 'Montoya Medrano',
        Email: 'mcubico33@gmail.com',
    }

    res.write(JSON.stringify(data));

    // Linea usada para indicar que se puede levantar el servidor
    res.end();
}).listen(port);

console.log(`Web Server escuchando el el puerto ${port}`);