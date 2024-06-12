function colors() {
    console.log('booyah');
    let color_options = [
        'red', 'orange', 'yellow', 'yellowgreen', 'green', 'blue', 'lime', 'purple', 'pink'
    ];

    let color = color_options[Math.floor(Math.random() * color_options.length)];
    console.log(color);
    document.querySelector('html').style.background = color;

    setTimeout(colors, 2000);
}

colors();

document.querySelector('body').addEventListener('click', () => {
	let audio = new Audio("sunshine.mp3");
	audio.play();
	document.querySelector('.lebonbon').style.display = 'block';
});