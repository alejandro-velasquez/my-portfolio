window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".logo");
    if (window.scrollY > 50) { // Si el usuario baja 50px o más
        header.classList.add("scrolled");
        logo.classList.add("color")
    } else {
        header.classList.remove("scrolled");
        logo.classList.remove("color");
    }
});

document.getElementById("btncopy").addEventListener("click", function() {
    const inputValue = document.getElementById("emailInput").value;

    navigator.clipboard.writeText(inputValue)
        .then(() => {
            const message = document.getElementById("copymessage");
            message.textContent = "Correo copiado";
            message.style.color = "white";

            setTimeout(() => {
                message.textContent = "Haz clic para copiar mi direccion de correo electronico";
                message.style.color = "";

            }, 2000);
        })
        .catch(err => console.error("Error al copiar", err));
})

