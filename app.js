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


// second slide

const sliderDiv = document.querySelectorAll(".emploee");
const button = document.querySelectorAll(".button");

let currentSlideIndex=0;
function startSlide(){
    sliderDiv.forEach((emploee, index)=>{
        if(index===currentSlideIndex){
            emploee.classList.add("start");
        }else{
            emploee.classList.remove("start");
        }
    });
}

startSlide();



function goToNextSlide() {
	if (currentSlideIndex === slides.length - 1) {
		currentSlideIndex = 0;
	} else {
		currentSlideIndex += 1;
	}
	startSlide();
  
    
}

button.forEach((but, index) => {
    	but.addEventListener("click", (e) => {
     		currentSlideIndex = index;
           
            
     		startSlide();
             
     	});
     });
     


// function indicators(){
//     for(i=0; i<button.length; i++){
//         button[i].className=button[i].className.replace('.but','');
//     }
//     button[index-1].className+='.but';
//     indicators();
// }