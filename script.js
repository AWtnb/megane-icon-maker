function randomizer() {
    const hex = (Math.random() * 0xFFFFFF | 0).toString(16);
    return String(("000000" + hex).slice(-6));
}
function randomCol() {
    const colorCode = randomizer();
    document.querySelector(".colorCode").innerHTML = colorCode;
    document.querySelector("#container").style.background = `#${colorCode}`;
}

function convertAsImg() {
    html2canvas(document.querySelector("#container")).then(canvas => {
        const imgData = canvas.toDataURL();
        const outputArea = document.querySelector("#output");
        outputArea.src = imgData;
    });
}