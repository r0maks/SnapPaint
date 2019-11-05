
window.onload = function () {
    var mousePositions = [];
    var trailLimit = 100;
    var enableDraw = false;
    var circles = [];
    var canvas = Snap(800, 800);

    canvas.mousemove((event, x, y) => {
        // mousePositions.push({ x, y })
        if (enableDraw) {
            addCircle(x, y);
        }
        console.log(event, x, y);
    });

    canvas.drag(() => { }, () => {
        enableDraw = true;
    }, () => {
        enableDraw = false;
    });


    function addCircle(x, y) {

        if (circles.length > trailLimit) {
            circles[0].remove();
            circles.shift();
        }
        circles.push(canvas.circle(x, y, 3));
    }

};

