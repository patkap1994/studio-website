/* jshint esversion:6 */

//##################################################################################################
//Hamburger menu dropdown toggle
//##################################################################################################

let toggleNavStatus = false;
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuButton = document.querySelector(".hamburger-icon");

function toggleNav() {
    let navList = document.querySelector(".nav-list");

    if (toggleNavStatus === false) {
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


//##############################################################################################
//"Show more" button for showing more portfolio projects
//##############################################################################################

const showMoreButton = document.querySelector('.btn.btn-black.btn-black-invisible');
const portfolioContainer = document.querySelector('.portfolio-container');

let showFullPortfolio = false;

showMoreButton.addEventListener('click', toggleFullPortfolio);

function toggleFullPortfolio(e) {
    e.preventDefault();

    if (!showFullPortfolio) {
        portfolioContainer.classList.add('show-portfolio');

        showMoreButton.innerText = 'Show less';

        showFullPortfolio = true;
    } else {
        portfolioContainer.classList.remove('show-portfolio');

        showMoreButton.innerText = 'Load more';

        showFullPortfolio = false;
    }
}


//##############################################################################################
//Changing quotes in quote section
//##############################################################################################

const quoteContainers = document.querySelectorAll('.quote-container');
const dots = document.querySelectorAll('.dot');

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', changeQuote);
}

function changeQuote() {
    clearInterval(changeQuoteContainer);

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-dot');
        quoteContainers[i].classList.remove('quote-container-active');
    }

    this.classList.add('active-dot');

    quoteContainers[this.dataset.number - 1].classList.add('quote-container-active');
}

//##############################################################################################
//Changing quotes in quote section with interval function
//##############################################################################################
let actualQuote = 1;

//Change quote every 6s
let changeQuoteContainer = setInterval(changeQuoteTiming, 6000);

function changeQuoteTiming() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-dot');
        quoteContainers[i].classList.remove('quote-container-active');
    }

    dots[actualQuote].classList.add('active-dot');
    quoteContainers[actualQuote].classList.add('quote-container-active');

    //Increase the array number of actually visible quote
    actualQuote += 1;

    //Check if this is the last quote in the collection and if it is then show first quote
    actualQuote == 4 ? actualQuote = 0 : null;
}