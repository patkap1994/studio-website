/* jshint esversion:6 */

//Hamburger menu dropdown toggle

let toggleNavStatus = false;
let hamburgerMenu = document.querySelector(".hamburger-menu");
let hamburgerMenuButton = document.querySelector(".hamburger-icon");

function toggleNav() {
    let navList = document.querySelector(".nav-list");

    if(toggleNavStatus === false) {
        navList.style.height = "100%";

        toggleNavStatus = true;
    } else {
        navList.style.height = "0";

        toggleNavStatus = false;
    }

    //Toggle hamburger menu icon

    hamburgerMenuButton.classList.toggle("active");
}

//Listen for clicking on hamburger menu icon and if it is clicked run toggleNav function

hamburgerMenu.addEventListener("click", toggleNav);



