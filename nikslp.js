// Function to center the window
function centerWindow(elmnt) {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var windowWidth = elmnt.offsetWidth;
    var windowHeight = elmnt.offsetHeight;

    var leftPos = (screenWidth - windowWidth) / 2;
    var topPos = (screenHeight - windowHeight) / 2;

    elmnt.style.left = leftPos + "px";
    elmnt.style.top = topPos + "px";
}

function dragElement(elmnt) {
    // Center the window
    centerWindow(elmnt);

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(elmnt.id + "_header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

dragElement(document.getElementById("console_window"));