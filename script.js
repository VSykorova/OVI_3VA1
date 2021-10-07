// Jednořádková poznámka
/* Víceřádková poznámka */

var cisloCarouselu = 1;
var car1;
var car2;
var car3;

function init(){
    car1 = document.getElementById("img1");
    car2 = document.getElementById("img2");
    car3 = document.getElementById("img3");

    document.getElementById("sipkaL").addEventListener("click", posunCarouselZpet);
    document.getElementById("sipkaP").addEventListener("click", posunCarouselVpred);
}

function posunCarouselZpet(){
    cisloCarouselu--;
    posunCarousel();
}

function posunCarouselVpred(){
    cisloCarouselu++;
    posunCarousel();
}

function posunCarousel(){
    console.log(cisloCarouselu);
    /* cisloCarouselu++; */  // přičte +1

    switch (cisloCarouselu) {
        case 0: 
            car1.style.display = "none";
            car2.style.display = "none";
            car3.style.display = "block";
            cisloCarouselu = 3;
            break;
        case 1:
            car1.style.display = "block";
            car2.style.display = "none";
            car3.style.display = "none";
            break;
        case 2:
            car1.style.display = "none";
            car2.style.display = "block";
            car3.style.display = "none";
            break;
         case 3:
            car1.style.display = "none";
            car2.style.display = "none";
            car3.style.display = "block";
            break;
        case 4:
            car1.style.display = "block";
            car2.style.display = "none";
            car3.style.display = "none";
            cisloCarouselu = 1;
            break;

    }

}