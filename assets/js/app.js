const btnScrollTop = document.getElementById("btnScrollTop");

// Mostrar / ocultar el botón según scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
});

// Scroll suave hacia arriba
btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
  