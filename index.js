document.addEventListener("keypress", function(e) {
    makeSound(e.key);
})

function makeSound(key) {
    switch (key) {
        case "a":
            var audio1 = new Audio("sounds/piano-a_A_major.wav");
            audio1.play();
            break;
        case "s":
            var audio2 = new Audio("sounds/piano-b_B_major.wav");
            audio2.play();
            break;
        case "k":
            var audio3 = new Audio("sounds/piano-bb_Asharp_major.wav");
            audio3.play();
            break;
        case "l":
            var audio4 = new Audio("sounds/piano-c_C_major.wav");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("sounds/piano-c_Csharp_major.wav");
            audio5.play();
            break;


        default:
            console.log("try again");
            break;
    }
}