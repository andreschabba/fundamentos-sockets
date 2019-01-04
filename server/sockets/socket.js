const { io } = require('../server');

//lado del servidor
io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Hola'
    });
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //esuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         res: 'Todo Salio Bien'
        //     });
        //     console.log(mensaje);
        // } else {
        //     callback({
        //         res: 'Todo Salio Mal'
        //     });
        // }
    });
});