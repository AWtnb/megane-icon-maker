function randomizer() {
    const hex = (Math.random() * 0xFFFFFF | 0).toString(16);
    return String(("000000" + hex).slice(-6));
}
function randomCol() {
    const colorCode = randomizer();
    document.querySelector(".colorCode").innerHTML = colorCode;
    document.querySelector("#container").style.background = `#${colorCode}`;
}

function asImageFile(canvas) {
    const i = canvas.toDataURL("image/png");
    window.open(i)
}


function convertAsImg() {
    const data = document.getElementById("container");
    html2canvas(data, {scale: "1"}).then(asImageFile);
}