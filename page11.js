const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const resultText = document.getElementById('result-text');

const options = [
    "Fav Restaurant 🍕",
    "Long Drive 🚗",
    "Movie Date 🍿",
    "Ice Cream 🍦",
    "Walk 🌳",
    "Plan Babies😂🎁"
];

const colors = ["#3c6100", "#611efd", "#f70e0ed5", "#ff6e00", "#f919bd", "#07c4ee"];
let startAngle = 0;
const arc = Math.PI / (options.length / 2);
let spinTimeout = null;
let spinAngleStart = 0;
let spinTime = 0;
let spinTimeTotal = 0;

function drawWheel() {
    canvas.width = 300;
    canvas.height = 300;
    const cw = canvas.width / 2;
    const ch = canvas.height / 2;

    for (let i = 0; i < options.length; i++) {
        const angle = startAngle + i * arc;
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.moveTo(cw, ch);
        ctx.arc(cw, ch, cw, angle, angle + arc, false);
        ctx.lineTo(cw, ch);
        ctx.fill();

        ctx.save();
        ctx.fillStyle = "white";
        ctx.translate(cw + Math.cos(angle + arc / 2) * cw * 0.6, ch + Math.sin(angle + arc / 2) * ch * 0.6);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        ctx.font = 'bold 12px Montserrat';
        ctx.fillText(options[i].split(' ')[0], -ctx.measureText(options[i].split(' ')[0]).width / 2, 0);
        ctx.restore();
    }
}

function spinWheel() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    rotateWheel();
}

function rotateWheel() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    drawWheel();
    spinTimeout = setTimeout(rotateWheel, 30);
}

function stopRotateWheel() {
    clearTimeout(spinTimeout);
    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);
    resultText.innerHTML = "Result: " + options[index] + " ❤️";
}

function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

drawWheel();