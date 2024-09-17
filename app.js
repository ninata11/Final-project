const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
function loadSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
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
const progressBars = document.querySelectorAll(".progress-bar");
const progress = document.querySelector(".progress");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;

    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}
function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = progressSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

// second slide

const sliderDiv = document.querySelectorAll(".emploee");
const button = document.querySelectorAll(".button");

let currentSlideIndex = 0;
function startSlide() {
  sliderDiv.forEach((emploee, index) => {
    if (index === currentSlideIndex) {
      emploee.classList.add("start");
    } else {
      emploee.classList.remove("start");
    }
  });
}

startSlide();

function goToNextEmployeeSlide() {
  if (currentSlideIndex === slides.length - 1) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex += 1;
  }
  startSlide();
}
sliderIntervalId = setInterval(goToNextEmployeeSlide, 5000);

button.forEach((but, index) => {
  but.addEventListener("click", (e) => {
    currentSlideIndex = index;

    startSlide();
  });
});


const createUserUrl = "https://borjomi.loremipsum.ge/api/send-message";
const form = document.querySelector("form");
const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const website = document.querySelector("#web");
const message = document.querySelector(".textarea");
const nameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const webError = document.querySelector("#web-error");
const inputs = document.querySelectorAll("input");

function checkUserName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Username is required.";
    nameInput.classList.add("error");
    return false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("error");
    nameInput.classList.add("correct");
  }
}

function checkWeb() {
  if (website.value.trim() === "") {
    webError.textContent = "Website is required.";
    website.classList.add("error");
    return false;
  } else {
    webError.textContent = "";
    website.classList.remove("error");
    website.classList.add("correct");
  }
}

function checkEmail() {
  if (!emailInput.validity.valid) {
    emailError.textContent = "Email is required.";

    if (emailInput.validity.typeMismatch) {
      emailError.textContent = "Please enter a valid email address.";
    }
    emailInput.classList.add("error");
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error");
    nameInput.classList.add("correct");
    return true;
  }
}

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    switch (input.id) {
      case "username":
        checkUserName();
        break;
      case "email":
        checkEmail();
        break;
      case "web":
        checkWeb();
        break;
    }
  });
});

const openModal = document.querySelector(".send-message ");
const modal = document.querySelector("#sign-up-modal");
const closeModal = document.querySelector(".x-button");

function sendMessage(user) {
  console.log(user);
  fetch("https://borjomi.loremipsum.ge/api/send-message", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isNameValid = checkUserName();
  const isMailValid = checkEmail();
  const isWebValid = checkWeb();
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    website: website.value,
    message: message.value,
  };
  sendMessage(user);

  if (isNameValid && isMailValid && isWebValid) {
    showSelectedModal("#sign-up-modal");
    form.reset();
    inputs.forEach((el) => el.classList.remove("correct"));
  } else {
    showSelectedModal("#sign-up-modal");
  }
});


function showSelectedModal(selector) {
  const modal = document.querySelector(selector);
  const closeBtn = modal.querySelector(".x-button");
  if (modal) {
    modal.classList.add("open");
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }
}

filterObjects("all");
function filterObjects(category) {
  const filterDivs = document.querySelectorAll('.filterDiv');
  
  
  if (category === 'all') {
    filterDivs.forEach((div) => {
      div.style.display = 'block';
    });
  } else {
    
    filterDivs.forEach((div) => {
      if (div.classList.contains(category)) {
        div.style.display = 'block'; 
      } else {
        div.style.display = 'none';
      }
    });
  }
}


const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



