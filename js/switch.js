const switchTheme = document.querySelector("#hide-checkbox");
const body2Elements = document.getElementsByClassName("pointerEvent");

function theme() {
    if (switchTheme.checked) {
        console.log(switchTheme.checked);
        for (const element of body2Elements) {
            element.classList.remove('body2');
        }
    } else {
        console.log(switchTheme.checked);
        for (const element of body2Elements) {
            element.classList.add('body2');
        }
    }
}

switchTheme.addEventListener('click', theme);
