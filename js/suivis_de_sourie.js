const ombre = document.createElement("div");
document.body.appendChild(ombre);
ombre.style.position = "absolute";  // Assurez-vous que l'élément ombre a une position absolue

document.addEventListener("mouseout", e => {
    ombre.classList.add('ombre2');

    setTimeout(() => {
        ombre.classList.remove('ombre2');
    }, 500);
});

document.body.addEventListener("mousemove", e => {
    ombre.classList.remove('ombre2');
    ombre.classList.add("ombre");

    ombre.style.left = e.clientX - 18 + "px";
    ombre.style.top = e.clientY - 18 + "px";

    // Appliquer pointer-events: none uniquement à l'ombre pendant le suivi de la souris
    ombre.style.pointerEvents = "none";

});
