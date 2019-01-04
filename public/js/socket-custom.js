var socket = io();
//lado del usuario
socket.on('connect', function() {
    console.log("Conectado al servidor");
});
//.on => escuchar
socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor');
});
//.emit => emitir
socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});