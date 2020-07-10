let flightStatus = null;
let abortButton = null;
let landButton = null;
let takeoffButton = null;
let shuttleHeight = null;
let upButton = null;
let downButton = null;
let rightButton = null;
let leftButton = null;

window.addEventListener("load", function() {
    abortButton = document.getElementById("missionAbort");
    landButton = document.getElementById("landing");
    takeoffButton = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    upButton = document.getElementById("upButton");
    downButton = document.getElementById("downButton");
    rightButton = document.getElementById("rightButton");
    leftButton = document.getElementById("leftButton");
    
    takeoffButton.addEventListener("click", function() {
        let checkConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (checkConfirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style = "background-color: blue";
            shuttleHeight.innerHTML = 10000;
        }
    });

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style = "background-color: green";
        shuttleHeight.innerHTML = 0;
    });

    abortButton.addEventListener("click", function() {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");
        if (abortConfirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style = "background-color: green";
            shuttleHeight.innerHTML = 0;
        }
    });

    upButton.addEventListener("click", function() {
        let element = document.getElementById("rocket");
        let x = 100;
        element.style.left = x + "px";
    });

});