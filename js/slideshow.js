'use strict';

const button_left = document.getElementById("button_left");
const button_right = document.getElementById("button_right");
const slide = document.getElementById("slide");
const imgs = [
    "img/slider1.png",
    "img/slider2.png",
    "img/slider3.png",
    "img/slider4.png"
];
let img_no = 0;


button_left.onclick = function() {
    img_no--;
    if(img_no == -1){
        img_no = 3;
    }
    change_img();
};

button_right.onclick = function() {
    img_no++;
    if(img_no == 4){
        img_no = 0;
    }
    change_img();
};

function change_img(){
    slide.src = imgs[img_no];
}
