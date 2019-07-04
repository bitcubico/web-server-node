const express = require('express');
const http = express();
const port = 3000;

// Con express podemos especificar las url que vamos a aceptar
// con http escuchabamos todo sin filtro

// Esta es la url del home (localhost:port/)
http.get('/', (req, res) => {
    res.send('Hello World');
});

// Esta es la url del home (localhost:port/home)
http.get('/home', (req, res) => {
    res.send('Hello World from Home');
});

// Esta url me retorna un Json (localhost:port/get/json)
http.get('/get/json', (req, res) => {
    let data = {
        Nombres: 'Mauricio',
        Apellidos: 'Montoya Medrano',
        Email: 'mcubico33@gmail.com',
    }

    res.send(data);
});

http.listen(port, () => {
    console.log(`Web Server escuchando el el puerto ${port}`);
});