function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "cruzjonatan437@gmail.com",
        Password: "***toadette2***",
        To: "jonatanalexanderdiaz@gmail.com",
        From: document.getElementById("email").value,
        Subject: document.getElementById("subject").value,
        Body: "Nombre: " + document.getElementById("full-name").value + "<br>" +
            "Teléfono: " + document.getElementById("phone").value + "<br>" +
            "Mensaje: " + document.getElementById("message").value
    }).then(
        function (message) {
            if (message === "OK" || message === "sent") {
                alert("Mensaje enviado exitosamente");
            } else {
                console.error("Error al enviar el mensaje:", message);
                alert("Error al enviar el mensaje. Inténtalo de nuevo.");
            }
        }
    );
}


function reset() {
    document.getElementById("contact-form").reset();
}

export { sendEmail, reset };