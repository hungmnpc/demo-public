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
    // sliderMain.style.transform = "translateX(-2000px)";
    
    nextBtn.onclick = function(){
        index++;
        index= index%slidersLength;
        let lengthtransform  = index * sliderItemWidth * -1;
        console.log(lengthtransform)
        sliderMain.style.transform = `translate(${lengthtransform}px)`;
    }
    prevBtn.onclick = function(){
        index--;
        if (index === -1){
            index = slidersLength -1;
        }
        console.log(index);
        let lengthtransform  = Math.abs(index)%slidersLength * sliderItemWidth * -1;
        console.log(lengthtransform)
        sliderMain.style.transform = `translate(${lengthtransform}px)`;
    }

   

    
    
});