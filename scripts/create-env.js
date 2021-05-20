const fs = require('fs');
fs.writeFileSync('./.env', `API=${process.env.API}\n`);
/*
En Netlify existe una seccion de variables de entorno, parametrizar la URI del API
*/