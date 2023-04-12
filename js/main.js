window.rollerblade = () => {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage = "dice" + randomNumber1 + ".png";

    var randomImageSource = "../images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "../images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


    //If player 1 wins
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Spiller 1 vinner!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Spiller 2 vinner! 🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "Uavgjort!";
    }
}