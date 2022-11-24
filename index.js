function next() {
    img = document.getElementById('sneakers');
    if (img.src.match("./images/image-product-1.jpg")) {
        img.src = "./images/image-product-2.jpg";
    } else if (img.src.match("./images/image-product-2.jpg")) {
        img.src = "./images/image-product-3.jpg"
    } else if (img.src.match("./images/image-product-3.jpg")) {
        img.src = "./images/image-product-4.jpg"
    } else {
        img.src = "./images/image-product-1.jpg"
    }
 }

function prev() {
    img = document.getElementById('sneakers');
    if (img.src.match("./images/image-product-4.jpg")) {
        img.src = "./images/image-product-3.jpg";
    } else if (img.src.match("./images/image-product-3.jpg")) {
        img.src = "./images/image-product-2.jpg"
    } else if (img.src.match("./images/image-product-2.jpg")) {
        img.src = "./images/image-product-1.jpg"
    } else {
        img.src = "./images/image-product-4.jpg"
    }
 }