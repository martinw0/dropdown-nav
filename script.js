var menuIconMobile = document.querySelector('.menu.mobile');
var menuCloseIconMobile = document.querySelector('.close.mobile');
var overlay = document.querySelector('.overlay');
var nav = document.querySelector('nav');
//Submenu
var menuItems = document.querySelectorAll('.menu-items li.hasSubmenu');

//Add click vent listener to open nav
menuIconMobile.addEventListener('click', displayMenu);
//Add click event listener to close nav
menuCloseIconMobile.addEventListener('click', hideMenu);
//Add click event listener to display/hide submenu
menuItems.forEach(element => {
    element.addEventListener('click', submenuAction);
});

function displayMenu() {
    //Display overlay
    overlay.classList.add('active');
    //Display nav
    nav.classList.add('active');
}
function hideMenu() {
    //Hide overlay
    overlay.classList.remove('active');
    //Hide nav
    nav.classList.remove('active');
}
function submenuAction(event) {
    var el = event.target;
    var img = el.querySelector('img');
    //If the menu is already active
    if (el.classList.contains('active')) {
        el.classList.remove('active');
        img.src = "./images/icon-arrow-down.svg";
    }
    else {
        el.classList.add('active');
        //Change the arrow
        img.src = "./images/icon-arrow-up.svg";
    }
}