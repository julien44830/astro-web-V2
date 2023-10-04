

const ombre = document.createElement("div");

document.body.appendChild(ombre);


document.body.addEventListener("mousemove", e => {
    console.log(e);
    console.log('hello world');
    console.log("pageX: ", e.pageX, 
    "pageY: ", e.pageY, 
    "clientX: ", e.clientX, 
    "clientY:", e.clientY);

    ombre.classList = "ombre";
    ombre.style.left = e.clientX + "px",
    ombre.style.top = e.clientY + "px";
});