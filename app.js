document.addEventListener("DOMContentLoaded", function () {
    var output = new Image();
    var logo = new Image();
    // let src = "http://avatars2.githubusercontent.com/u/7121557"; // insert image url here
    var src = 'https://avatars0.githubusercontent.com/u/6685088?v=3&s=460';
    var logoSrc = 'logo.png';
    output.crossOrigin = "Anonymous";
    output.onload = function () {
        var size = 400;
        var cv = document.getElementById("cv");
        var ctx = cv.getContext('2d');
        ctx.drawImage(output, 0, 0, size, size);
        ctx.fillStyle = ctx.strokeStyle = 'rgb(29, 39, 64)';
        ctx.lineWidth = size * 32 / 400;
        ctx.strokeRect(0, 0, size, size);
        var logoSize = 100;
        var logoBottomMargin = 8;
        var arcSize = logoSize * 1.6;
        ctx.arc(size, size, arcSize, 0, Math.PI * 2, false);
        ctx.clip();
        ctx.fillRect(size - arcSize, size - arcSize, arcSize, arcSize);
        ctx.drawImage(logo, size - logoSize, size - logoSize - logoBottomMargin, logoSize, logoSize);
    };
    logo.onload = function () {
        output.src = src;
    };
    logo.src = logoSrc;
});
