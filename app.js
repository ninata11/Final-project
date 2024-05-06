const slides = document.querySelectorAll(".slide");
let currentSlide=0;
function loadSlides(){
    slides.forEach((slide,index)=>{
        if(index===currentSlide){
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    } )
}
loadSlides();
function goToNextSlide() {
	if (currentSlide === slides.length - 1) {
		currentSlide = 0;
	} else {
		currentSlide += 1;
	}
	loadSlides();
}

let sliderIntervalId = null;

sliderIntervalId = setInterval(goToNextSlide, 5000);



// progress bar section
const progressSection = document.querySelector(".progress-section");
const progressBars=document.querySelectorAll(".progress-bar");
const progress=document.querySelector(".progress");

function showProgress(){
    progressBars.forEach(progressBar=>{
        const value = progressBar.dataset.progress;
        console.log(value);
        progressBar.style.opacity=1;
        progressBar.style.width= `${value}%`;
    })
}
function hideProgress(){
    progressBars.forEach(p=>{
        p.style.opacity=0;
        p.style.width=0;
    })
}


window.addEventListener('scroll',()=>{
    const sectionPos = progressSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight ;

    if(sectionPos<screenPos){
      showProgress();
    }else{
        hideProgress();
    }
})


