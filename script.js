console.log("bar");


function dot1() {
    document.querySelector(".dot1").classList.add("dot-on");
    document.querySelector(".dot2").classList.remove("dot-on");
    document.querySelector(".dot3").classList.remove("dot-on");
    document.querySelector(".dot4").classList.remove("dot-on");
    document.querySelector(".dot5").classList.remove("dot-on");
}

function dot2() {
    document.querySelector(".dot2").classList.add("dot-on");
    document.querySelector(".dot1").classList.remove("dot-on");
    document.querySelector(".dot3").classList.remove("dot-on");
    document.querySelector(".dot4").classList.remove("dot-on");
    document.querySelector(".dot5").classList.remove("dot-on");
}

function dot3() {
    document.querySelector(".dot3").classList.add("dot-on");
    document.querySelector(".dot1").classList.remove("dot-on");
    document.querySelector(".dot2").classList.remove("dot-on");
    document.querySelector(".dot4").classList.remove("dot-on");
    document.querySelector(".dot5").classList.remove("dot-on");
}

function dot4() {
    document.querySelector(".dot4").classList.add("dot-on");
    document.querySelector(".dot1").classList.remove("dot-on");
    document.querySelector(".dot2").classList.remove("dot-on");
    document.querySelector(".dot3").classList.remove("dot-on");
    document.querySelector(".dot5").classList.remove("dot-on");
}

function dot5() {
    document.querySelector(".dot5").classList.add("dot-on");
    document.querySelector(".dot1").classList.remove("dot-on");
    document.querySelector(".dot2").classList.remove("dot-on");
    document.querySelector(".dot3").classList.remove("dot-on");
    document.querySelector(".dot4").classList.remove("dot-on");
}

img1 = () => {
    document.querySelector("#img1").style.display = "block";
    document.querySelector("#img2").style.display = "none";
    document.querySelector("#img3").style.display = "none";
    document.querySelector("#img4").style.display = "none";
    document.querySelector("#img5").style.display = "none";

    document.querySelector(".member-info-1").style.display = "block";
    document.querySelector(".member-info-2").style.display = "none";
    document.querySelector(".member-info-3").style.display = "none";
    document.querySelector(".member-info-4").style.display = "none";
    document.querySelector(".member-info-5").style.display = "none";
    dot1();
}

img2 = () => {
    document.querySelector("#img2").style.display = "block";
    document.querySelector("#img1").style.display = "none";
    document.querySelector("#img3").style.display = "none";
    document.querySelector("#img4").style.display = "none";
    document.querySelector("#img5").style.display = "none";

    document.querySelector(".member-info-2").style.display = "block";
    document.querySelector(".member-info-1").style.display = "none";
    document.querySelector(".member-info-3").style.display = "none";
    document.querySelector(".member-info-4").style.display = "none";
    document.querySelector(".member-info-5").style.display = "none";
    dot2();
}

img3 = () => {
    document.querySelector("#img3").style.display = "block";
    document.querySelector("#img1").style.display = "none";
    document.querySelector("#img2").style.display = "none";
    document.querySelector("#img4").style.display = "none";
    document.querySelector("#img5").style.display = "none";

    document.querySelector(".member-info-3").style.display = "block";
    document.querySelector(".member-info-1").style.display = "none";
    document.querySelector(".member-info-2").style.display = "none";
    document.querySelector(".member-info-4").style.display = "none";
    document.querySelector(".member-info-5").style.display = "none";
    dot3();
}

img4 = () => {
    document.querySelector("#img4").style.display = "block";
    document.querySelector("#img1").style.display = "none";
    document.querySelector("#img2").style.display = "none";
    document.querySelector("#img3").style.display = "none";
    document.querySelector("#img5").style.display = "none";

    document.querySelector(".member-info-4").style.display = "block";
    document.querySelector(".member-info-1").style.display = "none";
    document.querySelector(".member-info-2").style.display = "none";
    document.querySelector(".member-info-3").style.display = "none";
    document.querySelector(".member-info-5").style.display = "none";
    dot4();
}

img5 = () => {
    document.querySelector("#img5").style.display = "block";
    document.querySelector("#img1").style.display = "none";
    document.querySelector("#img2").style.display = "none";
    document.querySelector("#img3").style.display = "none";
    document.querySelector("#img4").style.display = "none";

    document.querySelector(".member-info-5").style.display = "block";
    document.querySelector(".member-info-1").style.display = "none";
    document.querySelector(".member-info-2").style.display = "none";
    document.querySelector(".member-info-3").style.display = "none";
    document.querySelector(".member-info-4").style.display = "none";
    dot5();
}

window.addEventListener("load", function() {
    img1();
//   window.scrollTo({
//     top: 10000,
//     behavior:"smooth"
//   });
});



// ---------------------------------------------------------------------
// pizza
// ---------------------------------------------------------------------

document.getElementById("pizza").addEventListener("mouseover", pizzaOn)

function pizzaOn() {
    document.getElementById("pizza").setAttribute("src", "pizza.gif");
    document.querySelector("#card1").style.transform = "scale(1.1)";
};


document.getElementById("pizza").addEventListener("mouseout", pizzaOff)
    
function pizzaOff() {
    document.getElementById("pizza").setAttribute("src", "pizza-3010062.jpg");
    document.querySelector("#card1").style.transform = "scale(1)";
};

// ---------------------------------------------------------------------
// pasta
// ---------------------------------------------------------------------

document.getElementById("pasta").addEventListener("mouseover", pastaOn)

function pastaOn() {
    document.getElementById("pasta").setAttribute("src", "pasta.gif");
    document.querySelector("#card2").style.transform = "scale(1.1)";
};


document.getElementById("pasta").addEventListener("mouseout", pastaOff)
    
function pastaOff() {
    document.getElementById("pasta").setAttribute("src", "pasta-1854245.jpg");
    document.querySelector("#card2").style.transform = "scale(1)";
};


// ---------------------------------------------------------------------
// burger
// ---------------------------------------------------------------------


document.getElementById("burger").addEventListener("mouseover", burgerOn)

function burgerOn() {
    document.getElementById("burger").setAttribute("src", "burger.gif");
    document.querySelector("#card3").style.transform = "scale(1.1)";
};


document.getElementById("burger").addEventListener("mouseout", burgerOff)
    
function burgerOff() {
    document.getElementById("burger").setAttribute("src", "burguer-closeup-5952157.jpg");
    document.querySelector("#card3").style.transform = "scale(1)";
};

// ---------------------------------------------------------------------
// salad
// ---------------------------------------------------------------------



document.getElementById("salad").addEventListener("mouseover", saladOn)

function saladOn() {
    document.getElementById("salad").setAttribute("src", "salad.gif");
    document.querySelector("#card4").style.transform = "scale(1.1)";
};


document.getElementById("salad").addEventListener("mouseout", saladOff)
    
function saladOff() {
    document.getElementById("salad").setAttribute("src", "salad-1603608.jpg");
    document.querySelector("#card4").style.transform = "scale(1)";
};



document.getElementById("pizza").addEventListener("click", () => window.location.assign("https://www.google.com"));
document.getElementById("pasta").addEventListener("click", () => window.location.assign("https://www.google.com"));
document.getElementById("burger").addEventListener("click", () => window.location.assign("https://www.google.com"));
document.getElementById("salad").addEventListener("click", () => window.location.assign("https://www.google.com"));


// ---------------------------------------------------------------------
// Animations
// ---------------------------------------------------------------------



window.addEventListener(`scroll`, function(){
    let element = document.querySelectorAll(".feature-scroll");
    for (let i = 0; i < element.length; i++) {
        const feature = element[i];
if (window.scrollY >= 272) {
    feature.classList.remove(`fadeRight`);
    feature.classList.add(`visible`);
}
 else {
    feature.classList.add(`fadeRight`);
    feature.classList.remove(`visible`);
}
    }
})


window.addEventListener(`scroll`, function(){
    let element = document.querySelectorAll(".feature-scroll-2");
    for (let i = 0; i < element.length; i++) {
        const feature = element[i];
if (window.scrollY >= 272) {
    feature.classList.remove(`fadeLeft`);
    feature.classList.add(`visible`);
}
 else {
    feature.classList.add(`fadeLeft`);
    feature.classList.remove(`visible`);
}
    }
})


window.addEventListener(`scroll`, function(){
if (window.scrollY >= 1366) {
    document.querySelector(".div-foods-title").classList.remove(`fadeRight`);
    document.querySelector(".div-foods-title").classList.add(`visible`);
}
 else {
    document.querySelector(".div-foods-title").classList.add(`fadeRight`);
    document.querySelector(".div-foods-title").classList.remove(`visible`);
}
})


window.addEventListener(`scroll`, function(){
if (window.scrollY >= 600) {
    document.querySelector(".div-members-title").classList.remove(`fadeRight`);
    document.querySelector(".div-members-title").classList.add(`visible`);
}
 else {
    document.querySelector(".div-members-title").classList.add(`fadeRight`);
    document.querySelector(".div-members-title").classList.remove(`visible`);
}
})


window.addEventListener(`scroll`, function(){
    let element = document.querySelectorAll(".foodCard");
    for (let i = 0; i < element.length; i++) {
        const card = element[i];
if (window.scrollY >= 1502) {
    card.classList.remove(`fadeLeft`);
    card.classList.add(`visible`);
}
 else {
    card.classList.add(`fadeLeft`);
    card.classList.remove(`visible`);
}
    }
})


window.addEventListener(`scroll`, function(){
if (window.scrollY >= 2494) {
    document.querySelector(".div-questions-title").classList.remove(`fadeRight`);
    document.querySelector(".div-questions-title").classList.add(`visible`);
}
 else {
    document.querySelector(".div-questions-title").classList.add(`fadeRight`);
    document.querySelector(".div-questions-title").classList.remove(`visible`);
}
})


window.addEventListener(`scroll`, function(){
if (window.scrollY >= 2800) {
    document.querySelector("#accordionExample").classList.remove(`fadeTop`);
    document.querySelector("#accordionExample").classList.add(`visible`);
}
 else {
    document.querySelector("#accordionExample").classList.add(`fadeTop`);
    document.querySelector("#accordionExample").classList.remove(`visible`);
}
})

window.addEventListener(`scroll`, function(){
if (window.scrollY >= 3240) {
    document.querySelector(".div-reviews-title").classList.remove(`fadeRight`);
    document.querySelector(".div-reviews-title").classList.add(`visible`);
}
 else {
    document.querySelector(".div-reviews-title").classList.add(`fadeRight`);
    document.querySelector(".div-reviews-title").classList.remove(`visible`);
}
})




// window.addEventListener(`scroll`, function(){

// 	var feature =  document.querySelector(".feature-scroll");

//     for (var i = 0; i < feature.length; i++){

// 	var altura = window.innerHeight;
// 	var distancia = feature[i].getBoundingClientRect().top;

// 	if (distancia <= altura){

// 	feature[i].classList.add(`visible`);
// }
//     else {
//     feature[i].classList.add(`fadeRight`);
//     }
// }

// })