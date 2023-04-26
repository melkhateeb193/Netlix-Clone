// Search bar
const search = document.querySelector(".search");
const searchIcon = document.querySelector(".search__icon");
const searchInput = document.querySelector(".search__input");
const searchClose = document.querySelector(".search__close");

searchIcon.addEventListener("click", () => {
search.classList.add("search__open");
searchInput.focus();
});

searchClose.addEventListener("click", () => {
search.classList.remove("search__open");
searchInput.value = "";
});

// Genres list
const grid = document.querySelector(".genres__grid");
function toggleGenres() {
grid.style.display = grid.style.display === 'none' ? 'grid' : 'none';
}

// Progress bar
document.addEventListener("click", (e) => {
const handle = e.target.matches(".handle") ? e.target : e.target.closest(".handle");
if (handle) onHandleClick(handle);
});

const throttleProgressBar = throttle(() => {
document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
}, 250);
window.addEventListener("resize", throttleProgressBar);

document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);

function calculateProgressBar(progressBar) {
progressBar.innerHTML = "";
const slider = progressBar.closest(".row").querySelector(".slider");
const itemCount = slider.children.length;
const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"));
let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));
const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

if (sliderIndex >= progressBarItemCount) {
slider.style.setProperty("--slider-index", progressBarItemCount - 1);
sliderIndex = progressBarItemCount - 1;
}

for (let i = 0; i < progressBarItemCount; i++) {
const barItem = document.createElement("div");
barItem.classList.add("progress-item");
if (i === sliderIndex) {
barItem.classList.add("active");
}
progressBar.append(barItem);
}
}

function onHandleClick(handle) {
const progressBar = handle.closest(".row").querySelector(".progress-bar");
const slider = handle.closest(".container").querySelector(".slider");
const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));
const progressBarItemCount = progressBar.children.length;

if (handle.classList.contains("left-handle")) {
if (sliderIndex - 1 < 0) {
slider.style.setProperty("--slider-index", progressBarItemCount - 1);
progressBar.children[sliderIndex].classList.remove("active");
progressBar.children[progressBarItemCount - 1].classList.add("active");
} else {
slider.style.setProperty("--slider-index", sliderIndex - 1);
progressBar.children[sliderIndex].classList.remove("active");
progressBar.children[sliderIndex - 1].classList.add("active");
}
}

if (handle.classList.contains("right-handle")) {
if (sliderIndex + 1 >= progressBarItemCount) {
slider.style.setProperty("--slider-index", 0);
progressBar.children[sliderIndex].classList.remove("active");
progressBar.children[0].classList.add("active");
} else {
slider.style.setProperty("--slider-index", sliderIndex + 1);
progressBar.children[sliderIndex].classList.remove("active");
progressBar.children[sliderIndex + 1].classList.add("active");
}
}
}

function throttle(cb, delay = 1000) {
let shouldWait = false;
let waitingArgs;

const timeoutFunc = () => {
if (waitingArgs == null) {
shouldWait = false;
} else {
cb(...waitingArgs);
waitingArgs = null;
setTimeout(timeoutFunc, delay); }}}