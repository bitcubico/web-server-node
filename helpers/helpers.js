const hbs = require('hbs');

hbs.registerHelper('getAnnioHelper', () => {
    return new Date().getFullYear();
});