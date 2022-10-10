let img = ['img/Bananas.jpg', 'img/Blueberries.jpg', 'img/Cherries.jpg', 
           'img/Lime.jpg', 'img/Oranges.jpg', 'img/Peaches1.jpg', 'img/Peaches2.jpg', 
           'img/Pineapple.jpg', 'img/Pomegranate.jpg', 'img/Raspberries.jpg', 
           'img/Strawberries.jpg', 'img/Watermelone.jpg', 
           'img/Vegetables.jpg', 'img/Carrots.jpg', 'img/Tomatoes1.jpg', 
           'img/Potatoes.jpg', 'img/Cabbage1.jpg', 'img/Tomatoes2.jpg', 
           'img/Cabbage2.jpg', 'img/Onions.jpg', 'img/Broccoli.jpg', 'img/Cucumber.jpg', 
           'img/Ginger.jpg'];


let currentImage;


function load() {
    for (let i = 0; i < img.length; i++) {
        const images = img[i];
        document.getElementById('images').innerHTML += `
        <img onclick='openImg(${i})' class="img-box" src="${images}">`;
    }
}


function openImg(i) {
    currentImage = i;
    
    document.getElementById('body').innerHTML = blackBackground(img[i]); // In der Template definiert
}


function closebtn() {
    content();
    load();
}


function content() {
    document.getElementById('body').innerHTML = allStuff(); // In der Template definiert
}


function lastImg() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = img.length-1;
    }

    let imgMinus = img[currentImage];

    document.getElementById('container-background').innerHTML = goBackImage(imgMinus); // In der Template definiert
} 


function nextImg() {
    currentImage++;

    if (currentImage == img.length) {
        currentImage = 0;
    }

    let imgPlus = img[currentImage];

    document.getElementById('container-background').innerHTML = goNextImage(imgPlus); // In der Template definiert
}

