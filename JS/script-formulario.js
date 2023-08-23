document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar envío automático del formulario

    var nombre = document.getElementById("nombre").value;
    // Realiza aquí las validaciones para los demás campos

    if (nombre === "") {
        alert("Por favor, complete todos los campos requeridos.");
    } else {
        var popup = document.getElementById("popup");
        popup.style.display = "block";

        setTimeout(function () {
            popup.style.display = "none";
            window.location.href = "/index/opcion-jug-gal.html";
        }, 2000);
    }
});
