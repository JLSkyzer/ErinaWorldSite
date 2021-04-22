const bouton = document.getElementById('btn')
const navbox = document.getElementById('navbox')
const navi = document.getElementById('navi')

window.addEventListener("load", function(event) {
    bouton.innerHTML = "Plus"
    navbox.style.height = "0px"
    navbox.style.backgroundColor = "#0d0d0d"
    bouton.style.color = "white"

})

bouton.addEventListener('click', function(event) {
    if (navbox.style.height == "0px") {
        bouton.innerHTML = "Moins"
        navbox.style.height = "220px"
        bouton.style.border = "blue solid 4px"
        bouton.style.animation = "out 1s"
        navbox.style.animation = "show 1s"
    } else {
        bouton.innerHTML = "Plus"
        navbox.style.height = "0px"
        bouton.style.border = "red solid 4px"
        bouton.style.animation = "in 1s"
        navbox.style.animation = "hide 1s"
    }
})