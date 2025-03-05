function toggleMenu() {
    var menuIcon = document.getElementById("menuIcon");
    menuIcon.classList.toggle("active");
}

function toggleSearch() {
    var inputSearch = document.getElementById("searchIcon");
    inputSearch.classList.toggle("active");

}

function toggleSearchInput() {
    let searchInput = document.getElementById("searchInput");
    searchInput.style.border = "none";
}




function moveClinicInfo() {
    let mediaQuery = window.innerWidth;
    let parentDiv = document.getElementById("menuSearch");
    let childDiv = document.getElementById("clinicInfo");

    if (mediaQuery <= 987 && mediaQuery >= 540) {
        let searchPhone = document.getElementById("searchPhone");
        parentDiv.insertBefore(childDiv, searchPhone);
    } else {
        let menuBar = document.getElementById("menuBar");
        document.body.insertBefore(childDiv, menuBar);
    }
}

moveClinicInfo();

window.addEventListener("resize", moveClinicInfo);
window.addEventListener("resize", moveClinicInfo);
window.addEventListener("DOMContentLoaded", moveClinicInfo);
