function toggleMenu() {
    var menuIcon = document.getElementById("menuIcon");
    menuIcon.classList.toggle("active");

    checkWidth();
}

function toggleSearch() {
    var inputSearch = document.getElementById("searchIcon");
    inputSearch.classList.toggle("active");

    checkWidth();
}

function checkWidth() {
    let picContent = document.getElementById("picContent");
    let menuIconItem = document.getElementById("menuIconItem");
    let searchIconInput = document.getElementById("searchIconInput");
    let menuIconStyle = window.getComputedStyle(menuIconItem);
    let searchIconStyle = window.getComputedStyle(searchIconInput);
    if (window.innerWidth > 987) {
        picContent.style.marginTop = "0px";
    } else if(menuIconStyle.display === "block"){
        picContent.style.marginTop = menuIconItem.offsetHeight + "px";
    } else if (searchIconStyle.display === "block") {
        picContent.style.marginTop = searchIconInput.offsetHeight+ "px";
    } else {
        picContent.style.marginTop = "0px";
    }
}

window.addEventListener("resize", checkWidth);


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