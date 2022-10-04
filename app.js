var number = 0;
function controler(x){
    number = number +  x ;
    slideshows(number)
}
slideshows(number)
function slideshows(num){
    var slides = document.getElementsByClassName("slider");
    // console.log(slides);
    if(num == slides.length){
        number = 0;
        num = 0;
    }
    if(num< 0){
        number = slides.length-1;
        num = slides.length-1;
    }
    for(let y of slides){
        y.style.display='none';
    }

    slides[num].style.display='block';
}