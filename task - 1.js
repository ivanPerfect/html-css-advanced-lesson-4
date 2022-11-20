let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
img1.addEventListener("click", function (){
    document.querySelector(".image").src = "./img/cloun.jpg";
});
img2.addEventListener("click", function (){
    document.querySelector(".image").src = "./img/mops.jpg";
})
img3.addEventListener("click", function (){
    document.querySelector(".image").src = "./img/rabbit.jpg";
})