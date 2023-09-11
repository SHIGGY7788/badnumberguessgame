let i = 0
function checkNum() {
    var userNum = parseInt(document.getElementById("entry").value);
    var botNum = Math.floor(Math.random() * 21);
    if(userNum == botNum){
        var backgrd = document.getElementById("bg")
        var curScore = document.getElementById("curScore")
        backgrd.style.backgroundColor = "green";
        console.log("Color set to green")
        setInterval(resColor, 1000)
        ++i
        curScore.textContent = i
    }
    else {
        var highScore = document.getElementById("highScore");
        var curScore = document.getElementById("curScore");
        if (parseInt(highScore.textContent) <= i) {
            highScore.textContent = i;
        }
        console.log("Wrong Number");
        console.log("Correct number was: " + botNum);
        curScore.textContent = "0";
        i = 0;
    }
}

function resColor(){
    var backgrd = document.getElementById("bg")
    backgrd.style.backgroundColor = "#212121";
}

function reload() {
    location.reload()
}