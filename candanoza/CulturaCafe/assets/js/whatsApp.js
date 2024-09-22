function enviarWhatsApp(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Captura los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;

    // Genera el mensaje para WhatsApp
    const texto = `Hola soy ${nombre} y necesito ${mensaje}`;

    // Número de teléfono al que se enviará el mensaje (incluye el código de país)
    const telefono = '584126807599'; // Número de teléfono deseado

    // Genera el enlace de WhatsApp
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    // Redirige al usuario al enlace de WhatsApp
    window.open(url, '_blank');
}