function randomizer() {
    const hex = (Math.random() * 0xFFFFFF | 0).toString(16);
    return String(("000000" + hex).slice(-6));
}
function randomCol() {
    const colorCode = randomizer();
    document.querySelector(".colorCode").innerHTML = colorCode;
    document.querySelector("#container").style.background = `#${colorCode}`;
}

function daveCanvasPng(canvas) {
    const fileName = "megane";
    const link = document.createElement("a");
    link.download = fileName + ".png";
    canvas.toBlob(blob => {
        link.href = URL.createObjectURL(blob);
        link.click();
    });
}


function convertAsImg() {
    const data = document.querySelector("#container");
    html2canvas(data).then(daveCanvasPng);
}