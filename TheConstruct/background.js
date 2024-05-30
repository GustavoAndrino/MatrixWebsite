//BACK GROUND DISPLAY 
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const letters = "TheConstruct"
const fontSize = 16;

const columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(1);

function draw() {
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let number2 = 0;
    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[number2];//letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
        number2 = (number2 == letters.length - 1) ? number2 =0 : number2 + 1;
    }
     
}

setInterval(draw, 33);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});