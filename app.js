// https://api.github.com/users/RyanCavanaugh
function go(username) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", draw);
    oReq.open("GET", "https://api.github.com/users/" + username);
    oReq.send();
    function draw() {
        var data = JSON.parse(this.responseText);
        var output = new Image();
        var logo = new Image();
        var url = window.location.href;
        var src = data.avatar_url;
        var logoSrc = 'logo.png';
        output.crossOrigin = "Anonymous";
        output.onload = function () {
            var size = 400;
            var cv = document.getElementById("cv");
            var ctx = cv.getContext('2d');
            ctx.drawImage(output, 0, 0, size, size);
            ctx.fillStyle = ctx.strokeStyle = 'rgb(0, 116, 193)';
            ctx.lineWidth = size * 24 / 400;
            ctx.strokeRect(0, 0, size, size);
            var logoSize = 100;
            var logoBottomMargin = 2;
            var logoRightMargin = 2;
            var arcSize = logoSize * 1.05;
            ctx.arc(size, size, arcSize, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.fillRect(size - arcSize, size - arcSize, arcSize, arcSize);
            ctx.drawImage(logo, size - logoSize - logoRightMargin, size - logoSize - logoBottomMargin, logoSize, logoSize);
        };
        logo.onload = function () {
            output.src = src;
        };
        logo.src = logoSrc;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("username").addEventListener("keydown", function (e) {
        if (!e) {
            e = window.event;
        }
        if (e.keyCode == 13) {
            submit();
            e.preventDefault();
        }
    }, false);
    document.getElementById('submit').onclick = submit;
    function submit() {
        go(document.getElementById('username').value);
    }
});
