import express from 'express';

// instance of express
const app = express();

// port
const port = 3000;

// middleware
app.use((req, res, next) =>{
    console.log(req.get('Content-Type'));
    let date = new Date();
    console.log('Date:', `${date.getDate()}/${date.getMonth() + 1 }/${date.getFullYear()}` )
    console.log('Date:', `${date.toLocaleDateString('es-ES')}` )
    console.log('Time:', `${date.toLocaleTimeString('es-ES')}` )
   //console.log(res);
    next();
});
app.use((req, res, next) => {
    console.time();
    [...Array(100000).keys()];
    console.timeEnd();
    next();
});
// middleware with path
app.use('/users', (req, res, next) => {
    console.log('Request-Type:', req.method);
    next()
});
app.use('/user/1', (req, res, next) => {
    console.log('Request-Type:', req.method);
    next()
}, ((req, rs, next) => {
    console.log('Request URL: ', req.originalUrl);
    next();
    
}));
// req => petición al servidor = lectura
// res => respuesta del servidor = escritura
// get
app.get('/', (req, res) =>{
    res.send('Landing Page');
});
app.get('/users', (req, res) =>{
    res.send('Users Page');
});
app.get('/user/1', (req, res) =>{
    res.send('USER Page');
});

// post 
app.post('/home', ((req, res)=>{
    res.send('All good in POST home page');
}));

// put 
app.put('/users',((req, res) =>{
    res.send('All good in PUT users page');
}));
// delete
app.delete('/users', ((req, res)=> {
    res.send('Feels great to DELETE some users');
}));

// put 
app.put('/user/1',((req, res) =>{
    res.send('All good in PUT users page');
}));
// delete
app.delete('/user/1', ((req, res)=> {
    res.send('Feels great to DELETE some users');
}));

// server
app.listen(port, ()=> console.log(`All good in port ${port}`));
