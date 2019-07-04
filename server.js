const http = require('http');

const port = 3000;

http.createServer((req, res) => {
    res.write("Hola Mundo desde el primer Server de Bitcubico Technology S.A.S. con NodeJS");
    // Linea usada para indicar que se puede levantar el servidor
    res.end();
}).listen(port);

console.log(`Web Server escuchando el el puerto ${port}`);