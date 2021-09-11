window.addEventListener("load", function (){
    const slider = this.document.querySelector(".slider");
    const sliderMain = this.document.querySelector(".slider-main");
    const sliderItems = this.document.querySelectorAll(".slider-item");
    const prevBtn = this.document.querySelector(".slider-prev");
    const nextBtn = this.document.querySelector(".slider-next");
    const dotItem = this.document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidersLength = sliderItems.length;
    let index = 0;
    let lengthTransform
    // sliderMain.style.transform = "translateX(-2000px)";

    nextBtn.addEventListener("click", function (){
        handleChangeSlide(1);
    });
    prevBtn.addEventListener("click", function (){
        handleChangeSlide(-1);
    });

    function handleChangeSlide(direction){
        if(direction === 1){
            index++;
            index= index%slidersLength;
            lengthTransform  = index * sliderItemWidth * -1;
            console.log(lengthTransform)
            sliderMain.style.transform = `translate(${lengthTransform}px)`;
        }
        else if(direction ===-1){
            index--;
            if (index === -1) {
                index = slidersLength - 1;
            }
            console.log(index);
            lengthTransform = Math.abs(index) % slidersLength * sliderItemWidth * -1;
            console.log(lengthTransform)
            sliderMain.style.transform = `translate(${lengthTransform}px)`;
        }
    }
   
   

    
    
});