function randomizer() {
    const hex = (Math.random() * 0xFFFFFF | 0).toString(16);
    return String(("000000" + hex).slice(-6));
}
function randomCol() {
    const colorCode = randomizer();
    document.querySelector(".colorCode").innerHTML = colorCode;
    document.querySelector("#megane").style.background = `#${colorCode}`;
}

function asImageFile(canvas) {
    const i = canvas.toDataURL("image/png");
    document.getElementById("output").setAttribute("src", i);
}

function convertAsImg() {
    const data = document.getElementById("megane");
    const ratio = document.getElementById("size").value;
    html2canvas(data, {scale: ratio}).then(asImageFile);
}