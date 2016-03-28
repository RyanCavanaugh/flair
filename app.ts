document.addEventListener("DOMContentLoaded", () => {
	let output = new Image();
	let logo = new Image();
	// let src = "http://avatars2.githubusercontent.com/u/7121557"; // insert image url here
	let src = 'https://avatars0.githubusercontent.com/u/6685088?v=3&s=460';
	let logoSrc = 'logo.png';

	output.crossOrigin = "Anonymous";

	output.onload = () => {
		let size = 400;

		let cv = <HTMLCanvasElement>document.getElementById("cv");
		let ctx = <CanvasRenderingContext2D>cv.getContext('2d');

		ctx.drawImage(output, 0, 0, size, size);

		ctx.fillStyle = ctx.strokeStyle = 'rgb(29, 39, 64)';
		ctx.lineWidth = size * 32/400;
		ctx.strokeRect(0, 0, size, size);

		let logoSize = 100;
		let logoBottomMargin = 8;
		let arcSize = logoSize * 1.6;
		ctx.arc(size, size, arcSize, 0, Math.PI*2, false);
		ctx.clip();
		ctx.fillRect(size - arcSize, size - arcSize, arcSize, arcSize);
		ctx.drawImage(logo, size - logoSize, size - logoSize - logoBottomMargin, logoSize, logoSize);
	};

	logo.onload = () => {
		output.src = src;
	};
	logo.src = logoSrc;
});


