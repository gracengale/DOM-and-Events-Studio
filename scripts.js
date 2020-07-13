let flightStatus = null;
let abortButton = null;
let landButton = null;
let takeoffButton = null;
let shuttleHeight = null;

window.addEventListener("load", function() {
    abortButton = document.getElementById("missionAbort");
    landButton = document.getElementById("landing");
    takeoffButton = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");
    let rocket = document.getElementById("rocket");
    rocket.style.position = "relative";
    
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
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) - 10 + "px";
    });

    downButton.addEventListener("click", function() {
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) + 10 + "px";
    });

    rightButton.addEventListener("click", function() {
        let positionString = rocket.style.left;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.left = Number(position) + 10 + "px";
    });

    leftButton.addEventListener("click", function() {
        let positionString = rocket.style.left;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.left = Number(position) - 10 + "px";
    });

});