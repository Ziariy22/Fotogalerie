function blackBackground(images) {
    return `<div id="black-background" class="img-background">
            <img onclick="closebtn()" id="close-img" src="img/cancel.png">
            <img onclick="lastImg()" id="left-arrow" src="img/arrow-left.png">
            <img onclick="nextImg()" id="right-arrow" src="img/arrow-right.png">
            <div id="container-background" class="gallery-background-img">
            <img class="img-black-background" src="${images}">
            </div>
            </div>`;
}


function allStuff() {
    return `<div id="header-main" class="header">
            <span id="header-text">Healthy Food</span>
            </div>
            <div class="img-gallery">
            <div id="images" class="img-box"></div>
            </div>`;
}


function goBackImage(imgMinus) {
    return `<img id="img-black-background" src="${imgMinus}">`;
}


function goNextImage(imgPlus) {
    return `<img id="img-black-background" src="${imgPlus}">`;
}