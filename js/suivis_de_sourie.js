const ombre = document.createElement("div");
const img = document.createElement("img");

img.style.display = "none";
img.src = "../images/lune_cursor.png";
document.body.appendChild(ombre);
ombre.appendChild(img);
ombre.style.position = "absolute";  // Assurez-vous que l'élément ombre a une position absolue

document.addEventListener("mouseout", e => {
    img.classList.add('ombre2');

    setTimeout(() => {
        ombre.classList.remove('ombre');
    }, 500);
});

document.body.addEventListener("mousemove", e => {
    const x = e.clientX;
    const y = window.innerHeight - e.clientY; // Inversez la coordonnée Y

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculez la position normalisée le long de la diagonale inversée
    const normalizedDiagonalPosition = (x + y) / (windowWidth + windowHeight);

    // La valeur sera entre 0 (coin inférieur gauche) et 1 (coin supérieur droit)
    console.log("Position normalisée : " + normalizedDiagonalPosition);    
        // Utilisez la valeur normalisée comme vous le souhaitez



    const normalizedX = e.clientX / window.innerWidth;
    const normalizedZ = e.clientZ / window.innerWidth;
    const normalised = normalizedX + normalizedZ / 2 ;


    img.style.display = "block";
    // console.log("x = " + e.clientX + "  y = " + e.clientY);

        img.classList.remove('ombre2');
        img.classList.add("ombre");

        img.style.left = e.clientX - 18 + "px";
        img.style.top = e.clientY - 18 + "px";
        img.style.height = e.clientX /20 + "px";
        img.style.width = e.clientX /20 + "px";
        img.style.opacity = normalizedDiagonalPosition;

    

        // ombre.style.background = "rgba(60, 179, 113, 0." + e.clientX  + 50%e.clientX+")";
        // background: rgba(0, 0, 0, 0.4);


        // Appliquer pointer-events: none uniquement à l'ombre pendant le suivi de la souris
        ombre.style.pointerEvents = "none";

});
