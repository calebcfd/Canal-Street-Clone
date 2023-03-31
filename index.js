
function initialize() {
    let slideIns = ['food', 'retail', 'community']

    for (let id of slideIns) {
        document.getElementById(id).style.transform = 'translateY(0)'
    }

    let fadeIn = ['.logo', '.title'] 

    for (let selector of fadeIn) {
        document.querySelector(selector).style.opacity = 1
    }

}

let timer;

function payload(event) {

    console.log([event, window.scrollY])
    if (window.scrollY >= 500) {
        document.querySelector('.imax').style.opacity = 1;
    }

    if (window.scrollY >= 1800) {
        document.querySelector('#aboutContainer').style.opacity = 1;
    }
}

function debounce(callback, param) {

    if (timer) {
        return
    } else {
        timer = setTimeout(()=>{
            callback(param)
            timer = undefined
        }, 250)
    }

}

document.querySelector('#sidebar').onload = initialize()

window.addEventListener("scroll", (event)=>{debounce(payload, event)})