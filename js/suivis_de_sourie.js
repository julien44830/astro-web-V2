const ombre = document.createElement("div");
const img = document.createElement("img");
img.src = "../images/lune_cursor.png";

switchTheme.addEventListener("change", function() {
    if (switchTheme.checked) {
        img.src = "../images/lune_cursor.png";
    } else {
        img.src = "../images/soleil_cursor.webp";
    }
});

img.style.display = "none";
document.body.appendChild(ombre);
ombre.appendChild(img);

// window.addEventListener("mousemove", e => {
//     e.stopPropagation();
//     ombre.style.pointerEvents = "none";

//     const x = e.clientX;
//     const y = window.innerHeight - e.clientY; // Inversez la coordonnée Y

//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;

//     // Calculez la position normalisée le long de la diagonale inversée
//     const normalizedDiagonalPosition = (x + y) / (windowWidth + windowHeight);

//     // La valeur sera entre 0 (coin inférieur gauche) et 1 (coin supérieur droit)
//     console.log("Position normalisée : " + normalizedDiagonalPosition);    
//         // Utilisez la valeur normalisée comme vous le souhaitez

//     img.style.display = "block";
//     // console.log("x = " + e.clientX + "  y = " + e.clientY);

//         img.classList.remove('ombre2');
//         img.classList.add("ombre");

//         img.style.left = e.clientX - 18 + "px";
//         img.style.top = e.clientY - 18 + "px";
//         img.style.height = normalizedDiagonalPosition *45 + "px";
//         img.style.opacity = normalizedDiagonalPosition -0.3;
// });


window.addEventListener("mousemove", e => {
    e.stopPropagation();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    ombre.style.pointerEvents = "none";

    const x = e.clientX;
    const y = window.innerHeight - e.clientY; // Inversez la coordonnée Y
    console.log(x,y);

    // Calculez la position normalisée le long de la diagonale inversée
    const normalizedDiagonalPosition = (x + y) / (windowWidth + windowHeight);

    img.classList.remove('ombre2');
    img.classList.add("ombre");
    img.style.display = "block";
    img.style.left = x - 18 + "px";
    img.style.top = e.clientY - 18 + "px";
    img.style.height = normalizedDiagonalPosition * 45 + "px";
    img.style.opacity = normalizedDiagonalPosition - 0.3;
});
