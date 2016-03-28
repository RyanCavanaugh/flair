// https://api.github.com/users/RyanCavanaugh

function go(username: string) {
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", draw);
	oReq.open("GET", "https://api.github.com/users/" + username);
	oReq.send();

	function draw() {
		const data = JSON.parse(this.responseText);
		let output = new Image();
		let logo = new Image();
		let url = window.location.href;
		let src = data.avatar_url;
		let logoSrc = 'logo.png';

		output.crossOrigin = "Anonymous";

		output.onload = () => {
			let size = 400;

			let cv = <HTMLCanvasElement>document.getElementById("cv");
			let ctx = <CanvasRenderingContext2D>cv.getContext('2d');

			ctx.drawImage(output, 0, 0, size, size);

			ctx.fillStyle = ctx.strokeStyle = 'rgb(0, 116, 193)';
			ctx.lineWidth = size * 24/400;
			ctx.strokeRect(0, 0, size, size);

			let logoSize = 100;
			let logoBottomMargin = 2;
			let logoRightMargin = 2;
			let arcSize = logoSize * 1.05;
			ctx.arc(size, size, arcSize, 0, Math.PI*2, false);
			ctx.clip();
			ctx.fillRect(size - arcSize, size - arcSize, arcSize, arcSize);
			ctx.drawImage(logo, size - logoSize - logoRightMargin, size - logoSize - logoBottomMargin, logoSize, logoSize);
		};

		logo.onload = () => {
			output.src = src;
		};
		logo.src = logoSrc;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("username").addEventListener("keydown", function(e) {
    	if (!e) { e = window.event as KeyboardEvent; }

	    if (e.keyCode == 13) {
	    	submit();
	    	e.preventDefault();
		}
	}, false);

	document.getElementById('submit').onclick = submit;

	function submit() {
		go((document.getElementById('username') as HTMLInputElement).value);		
	}
});


