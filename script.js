const hobbyBtn        = getQuerySelector(".hobby-btn");
const movieBtn        = getQuerySelector(".movie-btn");
const websiteBtn      = getQuerySelector(".website-btn");
const gameBtn         = getQuerySelector(".game-btn");
const sideBarHobby    = getQuerySelector(".hobby-description")
const sideBarMovie    = getQuerySelector(".movie-description")
const sideBarWebsite  = getQuerySelector(".website-description")
const sideBarGame     = getQuerySelector(".game-description")
const closeHobbyBtn   = getQuerySelector(".close-hobby-btn")
const closeMovieBtn   = getQuerySelector(".close-movie-btn")
const closeWebsiteBtn = getQuerySelector(".close-website-btn")
const closeGameBtn    = getQuerySelector(".close-game-btn")



function getQuerySelector(identifier) {
    return document.querySelector(identifier)
}





hobbyBtn.addEventListener("click", (e) => {
    
    e.preventDefault();
    closeSideBar(sideBarMovie,  "#movie-btn");
    closeSideBar(sideBarWebsite,"#website-btn");
    closeSideBar(sideBarGame, "#game-btn");

    handleClick(sideBarHobby, "#hobby-btn");
    
})


closeHobbyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeSideBar(sideBarHobby, "#hobby-btn");

})


movieBtn.addEventListener("click", (e) => {
    e.preventDefault()

    closeSideBar(sideBarHobby,   "#hobby-btn")
    closeSideBar(sideBarWebsite, "#website-btn");
    closeSideBar(sideBarGame,    "#game-btn");

    handleClick(sideBarMovie, "#movie-btn")
})


closeMovieBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeSideBar(sideBarMovie, "#movie-btn")
})


websiteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    closeSideBar(sideBarHobby,   "#hobby-btn")
    closeSideBar(sideBarMovie,   "#movie-btn");
    closeSideBar(sideBarGame,    "#game-btn");

    handleClick(sideBarWebsite, "#website-btn")
})


closeWebsiteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeSideBar(sideBarWebsite,  "#website-btn")
})


gameBtn.addEventListener("click", (e) => {
    
    e.preventDefault();

    closeSideBar(sideBarHobby,   "#hobby-btn")
    closeSideBar(sideBarMovie,   "#movie-btn");
    closeSideBar(sideBarWebsite, "#website-btn");

    handleClick(sideBarGame, "#game-btn")
})


closeGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeSideBar(sideBarGame, "#game-btn")
})


function handleClick(sideBarSelector, buttonSelector) {

    let resp = sideBarSelector.classList.toggle("sidebar_active"); 
    let button = getQuerySelector(buttonSelector)  

    if (resp) {
        button.innerHTML = "View less..";
    } else {
        button.innerHTML = "View more..";
    }


}


function closeSideBar(selector, button) {
    selector.classList.remove("sidebar_active");
    getQuerySelector(button).innerHTML = "View more.."
    
    
}

closeSideBar(sideBarHobby,   "#hobby-btn")
closeSideBar(sideBarMovie,   "#movie-btn");
closeSideBar(sideBarWebsite, "#website-btn");
closeSideBar(sideBarGame,    "#game-btn");