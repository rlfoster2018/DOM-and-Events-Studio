let takeoff = null;
let landing = null;
let missionAbort = null;

function init () {
    takeoff = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    up = document.getElementById("up");
    down = document.getElementById("down");
    left = document.getElementById("left");
    right = document.getElementById("right");
    interface = document.getElementById("interface");
    flightStatus = document.getElementById("flightStatus");
    height = document.getElementById("spaceShuttleHeight");
    rocket = document.getElementById("rocket");
    let rightMargin = document.getElementById('rocket').style.marginRight;
    let leftMargin = document.getElementById('rocket').style.marginLeft;
    let topMargin = 0;
    let bottomMargin = 0;

  takeoff.onclick = function() {
    launchConfirm = window.confirm("Confirm that shuttle is ready for takeoff.");
    
    if (launchConfirm == true) {
	shuttleBackground.style.backgroundColor = 'blue';
	flightStatus.innerHTML = "Shuttle in flight.";
        height.innerHTML = 10000;
    }
 
  }

  landing.onclick = function() {
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = 'green';
    height.innerHTML = 0;
  }

  missionAbort.onclick = function() {
    abortConfirm = window.confirm("Confirm that you want to abort the mission.");

    if (abortConfirm == true) {
	flightStatus.innerHTML = "Mission aborted.";
	shuttleBackground.style.backgroundColor = 'green';
	height.innerHTML = 0;
    }
  }

  up.addEventListener('click', function(){
    bottomMargin += 10;
    document.getElementById('rocket').style.marginBottom = bottomMargin + 'px';
  });

  down.addEventListener('click', function(){
    topMargin += 10;
    document.getElementById('rocket').style.marginTop = topMargin + 'px';
  });

  left.addEventListener('click', function(){   
    leftMargin -= 10;
    document.getElementById('rocket').style.marginLeft = leftMargin + 'px';
  });

  right.addEventListener('click', function(){
    rightMargin -= 10;
    document.getElementById('rocket').style.marginRight = rightMargin + 'px';
  });
}
window.onload = init;