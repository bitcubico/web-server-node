// Con express podemos especificar las url que vamos a aceptar
// con http escuchabamos todo sin filtro
const express = require('express');
const hbs = require('hbs');

const http = express();
const port = 3000;

// Con este MIDDLEWARE le indicamos al servidor que el directorio especificado es público, por lo tanto cualquiera
// podría accederlos.
http.use(express.static(`${__dirname}/public`))

hbs.registerPartials(`${__dirname}/views/partials`)
    // Indico con esta línea que vamos a usar Handlebars para construir las respuestas al cliente
    // y que los archivos Handlebars tendrán la extensión .hbs
http.set('view engine', 'hbs');

// Esta es la url del home (localhost:port/)
http.get('/', (req, res) => {
    res.render('home.hbs', {
        usuario: "mauricio montoya medrano",
        annio: new Date().getFullYear()
    });
});

// Esta es la url del home (localhost:port/home)
http.get('/home', (req, res) => {
    res.render('home.hbs', {
        usuario: "mauricio montoya medrano",
        annio: new Date().getFullYear()
    });
});

// Esta url me retorna un Json (localhost:port/get/json)
http.get('/about', (req, res) => {
    res.render('about.hbs', {
        annio: new Date().getFullYear()
    });
});

http.listen(port, () => {
    console.log(`Web Server escuchando el el puerto ${port}`);
});