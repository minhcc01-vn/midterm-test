var count = 1
setInterval (()=> {
    document.getElementById('radio'+count).checked = true
    count++
    if(count > 4) {
        count = 1 
    }
}, 4000)



// field search 
var overlay = document.querySelector('.overlay-full')
var sectionSearch =document.querySelector('.section-search')
var closeIcon = document.querySelector('.close')
var searchIcon = document.querySelector('.menu-icon-search')
//open search box 
searchIcon.onclick = openSearchBox
function openSearchBox () {
    Object.assign(sectionSearch.style, {
        opacity: 1,
        display: 'flex'
    })

    Object.assign(searchIcon.style, {
        opacity: 0,
        visibility: 'hidden',
    })
}

// Hide search box
closeIcon.onclick = closeSearchBox
overlay.onclick = closeSearchBox

function closeSearchBox() {
    hide(sectionSearch)
    Object.assign(searchIcon.style, {
        opacity: 1,
        visibility: 'visible',
    })
    
}

function hide(element) {
    Object.assign(element.style, {
        opacity: 0,
        display: 'none',
    })
}

function show(element) {
    Object.assign(element.style, {
        opacity: 1,
        display: 'block',
    })
}
//  menu responsive 
var bar = document.querySelector('.bars')
var times = document.querySelector('.times')
var menuRes = document.querySelector('.menu-reponsive')

bar.onclick = showMenuRSP

function showMenuRSP() {
    menuRes.style.transform = 'translateX(0)'
}
times.onclick = hideMenuRSP

function hideMenuRSP () {
    menuRes.style.transform = 'translateX(-100%)'
}