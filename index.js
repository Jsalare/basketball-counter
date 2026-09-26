let scoreHome = 0;
let scoreGuest = 0;

let scoreNumHome = document.getElementById("score-num-home");
let scoreNumGuest = document.getElementById("score-num-guest")


function addOneHome() {
    scoreHome += 1
    scoreNumHome.textContent = scoreHome;
}
function addTwoHome() {
    scoreHome += 2
    scoreNumHome.textContent = scoreHome;
}
function addThreeHome() {
    scoreHome += 3
    scoreNumHome.textContent = scoreHome;
}


function addOneGuest() {
    scoreGuest += 1
    scoreNumGuest.textContent = scoreGuest;
}
function addTwoGuest() {
    scoreGuest += 2
    scoreNumGuest.textContent = scoreGuest;
}
function addThreeGuest() {
    scoreGuest += 3
    scoreNumGuest.textContent = scoreGuest;
}

function resetStats() {
    scoreHome = 0;
    scoreGuest = 0;

    scoreNumHome.textContent = scoreHome;
    scoreNumGuest.textContent = scoreGuest;
}