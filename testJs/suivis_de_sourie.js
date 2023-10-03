console.log('hello world');
    const ombre = document.createElement("div");


window.addEventListener('mousemove', e => {

    ombre.classList = "ombre";
    document.body.appendChild(ombre);

    // console.log("pageX: ", e.pageX, 
    // "pageY: ", e.pageY, 
    // "clientX: ", e.clientX, 
    // "clientY:", e.clientY)

    ombre.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
});