
var isDragging = false;
var color = '#000';
var mousePositions = [];
var elements = [];
var strokeWidth = 20;
var easing = 0.05;
var x = 0;
var y = 0;
var px = 0;
var py = 0;


window.onload = function () {

    var canvas = Snap('#snapContainer');

    canvas.mousemove((event, x, y) => {
        mousePositions.push({ x, y });
        if (isDragging) {
            addLine(x, y);
        }
    });

    canvas.drag(() => { }, () => {
        isDragging = true;
    }, () => {
        isDragging = false;
    });


    function addCircle(x, y) {
        circles.push(canvas.circle(x, y, 3).attr({
            stroke: 'black',
            strokeWidth: strokeWidth
        }));
    }

    function addRect(x, y) {
        canvas.rect(x, y, 10, 10).attr({ stroke: color });
    }

    function addLine(mouseX, mouseY) {

        // var targetX = mouseX;
        // x += (targetX - x) * easing;
        // var targetY = mouseY;
        // y += (targetY - y) * easing;
        // var weight = Snap.len(x, y, px, py)

        // canvas.line(x, y, px, py).attr({
        //     stroke: 'black',
        //     strokeWidth: weight
        // });
        // py = y;
        // px = x;

        var lastMouse = mousePositions[mousePositions.length - 3];

        if (lastMouse) {
            elements.push(canvas.line(lastMouse.x, lastMouse.y, mouseX, mouseY).attr({
                stroke: color,
            }));
        }

    }
};

function undo() {
    if (elements.length > 0) {
        elements[elements.length - 1].remove();
        elements.pop();
    }
}
function clearAll() {
    elements.forEach(element => {
        element.remove();
    });
    elements = [];
}

