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

const form = document.querySelector("form");
const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const website = document.querySelector("#web");
const nameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const webError = document.querySelector("#web-error");

function checkUserName(){
    if(nameInput.value.trim() ===''){
        nameError.textContent="Username is required.";
        nameInput.classList.add("error");
        return false
    }else{
        nameError.textContent="";
        nameInput.classList.remove("error");
        nameInput.classList.add("correct");
    }
};

function checkWeb(){
    if(website.value.trim() ===''){
        webError.textContent="Website is required.";
        website.classList.add("error");
        return false
    }else{
        webError.textContent="";
        website.classList.remove("error");
        website.classList.add("correct");
    }
};


function checkEmail(){
    if(!emailInput.validity.valid){
        emailError.textContent="Email is required."
        
        if (emailInput.validity.typeMismatch){
            emailError.textContent="Please enter a valid email address.";
        }emailInput.classList.add("error");
        return false
    }else{
        emailError.textContent="";
        emailInput.classList.remove("error");
        nameInput.classList.add("correct");
        return true
    }
};


nameInput.addEventListener("input",checkUserName);
emailInput.addEventListener("input",checkEmail);
website.addEventListener("input",checkWeb);



addEventListener("submit",(e)=>
{
    e.preventDefault()
    const isNameValid=checkUserName();
    const isMailValid=checkEmail();
    const isWebValid=checkWeb();
   

    if(isNameValid&&isMailValid&&isWebValid)
    {
        showSelectedModal("#sign-up-modal");
        form.reset();
        inputs.forEach((el)=>classList.remove("correct"));
    }else{
        showSelectModal("#sign-up-error-modal");
    }
});

function showSelectedModal(selector) {
	const modal = document.querySelector(selector);
	const closeBtn = modal.querySelector(".modal-close");
	if (modal) {
		modal.classList.add("open");
	}

	if (closeBtn) {
		closeBtn.addEventListener("click", () => {
			modal.classList.remove("open");
		});
	}
}