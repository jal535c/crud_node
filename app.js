const express = require('express');
const app = express();

const db = require('./db');


//Configuracion
app.set('view engine', 'ejs');    //establece el motor de plantillas

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));   //carpeta que publica el servidor, accesible por el cliente por defecto en ruta /

app.set('port', process.env.PORT || 3000);


//Rutas
const alumno = require('./routes/alumno');
app.use(alumno);

app.get('/', (req, res)=>{
  res.send('hola mundo');
});


//Lanza servidor
app.listen(app.get('port'), ()=>{
  console.log('¡Server UP! on http://localhost:' + app.get('port'));
});