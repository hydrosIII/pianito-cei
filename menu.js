//Define constants
////hamburguer button
const btnResponsive = document.querySelector('.btn_menu_responsive')
/// document body
const body = document.body
//// the responsive menu
const menuResponsive = document.querySelector('.menu-responsive')
// the closing button of the menu
const btnCloseMenuResponsive = document.querySelector('.btn_close')


/// add query selector to the button of close and the hamburguer button
btnResponsive.addEventListener('click', displayMenu)
btnCloseMenuResponsive.addEventListener('click',removeMenu)


/// simple function to remove and put a class
function displayMenu () {
    
    menuResponsive.classList.add('pointer')
    body.classList.add("not-overflow")

}

function removeMenu (){
    menuResponsive.classList.remove('pointer')
    body.classList.remove("not-overflow")
}
