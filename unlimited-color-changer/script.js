function getColor() {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let len = Math.floor(Math.random() * 16);
        color += hex[len];
    }
    return color;
}

const startChangingColor = () => {
    function changeBGColor() {
        document.body.style.backgroundColor = getColor();
    }
    if (!intervalId) {
        intervalId = setInterval(changeBGColor, 1000);
    }
}

const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
}

let intervalId;

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
