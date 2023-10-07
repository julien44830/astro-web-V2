const ombre = document.createElement("div");
document.body.appendChild(ombre);


document.addEventListener("mouseout", e => {

    console.log('je suis sortie');
    ombre.classList.add('ombre2');

    setTimeout(() => {
        ombre.classList.remove('ombre');
    }, 500);
});

document.body.addEventListener("mousemove", e => {


    ombre.classList.remove('ombre2');
    ombre.classList = "ombre";
    ombre.style.display ="block";
    ombre.style.left = e.clientX + -18 + "px",
    ombre.style.top = e.clientY + -18 + "px";

    e.stopPropagation();
});