var taghtml = document.getElementsByTagName("body")[0]
var navson = document.getElementsByClassName("son")[0]




function setcond () {
    
    if (navson.textContent == "Som") {
        navson.innerText = "Off"
        navson.classList.remove('bi-volume-down-fill')
        navson.classList.add('bi-volume-mute-fill')
        
    } else {
        navson.innerText = "Som"
        navson.classList.remove('bi-volume-mute-fill')
        navson.classList.add('bi-volume-down-fill')   
    }
}

function son () {
    if (navson.textContent == "Som") {
        var audio = document.getElementsByTagName("audio")[0]
        audio.play() 
    } 
      
}

taghtml.addEventListener('click', son)
navson.addEventListener('click', setcond)
