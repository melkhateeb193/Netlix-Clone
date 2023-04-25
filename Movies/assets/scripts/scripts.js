//search bar
let search = document.querySelector(".search");
let searchIcon = document.querySelector(".search__icon");
let searchInput = document.querySelector(".search__input");
let searchClose = document.querySelector(".search__close");

searchIcon.addEventListener("click", () => {
    search.classList.add("search__open");
    searchInput.focus();
})

searchClose.addEventListener("click", () => {
    search.classList.remove("search__open");
    searchInput.value = "";
})
///////////////////////////////////////////////////////////////////////////////////
//genres list
let grid = document.getElementsByClassName("genres__grid")[0];
function opengenres() {
    if (grid.style.display === 'none') {
        grid.style.display = 'grid';
    } else { grid.style.display = 'none' }
}
